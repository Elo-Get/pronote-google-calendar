/*
Permet de convertir les date au format Y-m-d
param dateTime date => date en param
return dateTime => format Y-m-d
 */

const getDate = (date) => {
    date = date.toString();
    var result = '';
    for (var i = 0; i < 10; i++) {
        result += date[i];
    }
    return result;
}

const getDateTime = (date) => {
    date = date.toString();
    var result = '';
    for (var i = 0; i < 21; i++) {
        result += date[i];
    }
    return result;
}

module.exports = {
    getDate,
    getDateTime
}
