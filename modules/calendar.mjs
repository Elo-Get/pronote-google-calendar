import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config()
const getColor = require('./get_event_color');
const getDate = require('./date');


class Calendar {

    /*
    Take few paramaters to create an google event
    param string name => the name of the subject
    param int room => the name of the class room
    param dateTime start_event => the start of the event
    param dateTime end_event => the end of the event
     */
    constructor(name, room, start_event, end_event, cancelled, teacher,homework, userEvents, calendar, lastMark) {
        this.name = name;
        this.room = room;
        this.start_event = start_event;
        this.end_event = end_event;
        this.cancelled = cancelled;
        this.teatcher = teacher;
        this.color = getColor.getColor(this.name);
        this.homework = homework;
        this.userEvents = userEvents;
        this.calendar = calendar;
        this.lastMark = lastMark;
    }

    /*
    Permit to get the description of the google event
     */
    getDescription() {

        let teacher = this.teatcher !== undefined ? ' (professeur : ' + this.teatcher + ') ' : ''
        let mark = this.lastMark !== null ? '\n' + this.lastMark : '';
        let homework = this.homework !== null ? this.homework : '';

        return teacher + mark + homework;
    }

    /*
    Return Json file for the google calendar insert.
     */
    getJson() {
        var event = {
            'summary': this.cancelled == true ? this.name + '(ANNULE)' : this.name,
            'location': this.room,
            'description':  this.getDescription(),
            'colorId' : this.color,
            'start': {
                'dateTime': this.start_event,
                'timeZone': 'Europe/Paris',
            },
            'end': {
                'dateTime': this.end_event,
                'timeZone': 'Europe/Paris',
            },
            'reminders': {
                'useDefault': false,
                'overrides': [
                    {'method': 'popup', 'minutes': 10},
                ],
            },
        };

        return event;
    }

    /*
    Permit to create an google calendar event
    return bool
     */
    createEvent() {

        this.calendar.freebusy.query(
            {
                resource : {
                    timeMin : this.start_event,
                    timeMax : this.end_event,
                    timeZone : 'Europe/Paris',
                    items : [{'id' : 'primary'}]
                },
            },
            (err, res) => {
                if (err) return console.error('Free Bussy Error : ', err);

                const eventsArr = res.data.calendars.primary.busy;

                if (eventsArr.length <= 0) {

                    return this.calendar.events.insert(
                        {
                            calendarId : 'primary',
                            resource : this.getJson()
                        },
                        (err) => {
                            if (err) return console.error('Erros has been encroured');

                            return console.log('Event created !')
                        }
                    );

                }

                // Update des Events

                this.updateEvent();

                return console.log('Evenement existant !')
            }
        )

        let data = this.getJson();
        return data;
    }

    /*
    Permit to update google event
     */
    updateEvent() {

        let eventId = this.fetchNextEventsId();

        if (eventId === null) return;
        let request = this.calendar.patch(
            {
            'calendarId' : 'primary',
            'evendId' : eventId,
            'ressource' : this.getJson()
            }
        );
        request.execute((event) => {
            console.log(event);
        })


    }

    /*
    Permit to give the event id of the google event
    return => null if id is undefined and the id if the id exist
     */
    fetchNextEventsId() {


        this.userEvents.forEach((value) => {
            var start = new Date(value['start']);
            var end = new Date(value['end']);
            if (this.name === value['summary'] && getDate.getDate(this.start_event) === getDate.getDate(start) && getDate.getDate(this.end_event) === getDate.getDate(end)) {
                return value['idEvent'];
            }
        });

        return null;


    }


}


export default Calendar;
