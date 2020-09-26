const Events = (calendar) => {

    result = [];

    calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const events = res.data.items;
        if (events.length) {
            events.map((event, i) => {
                const start = event.start.dateTime || event.start.date;
                const end = event.end.dateTime || event.end.date;
                const idEvent = event.id;
                const summary = event.summary;

                result.push({start: start, end: end, idEvent: idEvent, summary: summary});

            });
        }
    });

    return result;

}

module.exports = {
    Events
}