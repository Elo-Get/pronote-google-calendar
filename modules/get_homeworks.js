const getDate = require('./date');

/*
Permit to triate homeworks
param json homework => list of homeworks in json format
param string subject => the subject
param dateTime from => the start of subject event
 */
const getHomeworks = (homework, subject, from) => {
    let result = '\nDEVOIRS :';
    for (var i = 0; i < homework.length; i++) {
        let hm = homework[i];
        if (hm['subject'] === subject && getDate.getDate(hm['for']) === getDate.getDate(from)) {
            result += '\n* ' + hm['description'];
        }
    }
    return result !== '\nDEVOIRS :' ? result : null;
}

module.exports = {
    getHomeworks
}