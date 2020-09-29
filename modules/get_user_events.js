const getEvents = async (calendar) => {
    const res = await calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
    });
    return res.data.items;
}

const Events = async (calendar) => {

    let events = await getEvents(calendar);
    let result = [];


    if (events.length) {
        events.forEach((value) => {
            const start = value.start.dateTime || value.start.date;
            const end = value.end.dateTime  || value.end.date;
            const idEvent = value.id;
            const summary = value.summary;

            result.push({start: start, end: end, idEvent: idEvent, summary: summary});

        });
    }

    return result;

}
module.exports = {
    Events
}
