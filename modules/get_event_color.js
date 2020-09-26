const getColor = (subject) => {
    var data = [
        {
            'MATHEMATIQUES' : 11,
            'ESPAGNOL LV2' : 6,
            'ESPAGNOL LV1' : 6,
            'ALLEMAND LV1' : 2,
            'ALLEMAND LV2' : 2,
            'ANGLAIS LV1' : 1,
            'ANGLAIS LV2' : 1,
            'CHINOIS LV1' : 3,
            'CHINOIS LV2' : 3,
            'ED.PHYSIQUE & SPORT.' : 5,
            'NUMERIQUE SC.INFORM.' : 8,
            'PHILOSOPHIE' : 4,
            'HISTOIRE & GEOGRAPH.' : 10,
            'ENS. MORAL & CIVIQUE' : 7,
            'PHYSIQUE-CHIMIE' : 3,
            'SCIENCS VIE a TERRE' : 10,

        }
    ];
    return data[0][subject] !== undefined ? data[0][subject] :  5;
}

module.exports = {
    getColor
}