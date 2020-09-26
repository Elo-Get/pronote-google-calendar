/*
Get last marks for each subject
param json marks
param string summary
return string
 */

const getMarks = (marks, summary) => {

    let result = null;

    if (marks.length === 0) return;
    marks['subjects'].forEach((value) => {
        //console.log(value['name'] + ' => '+ summary);
       if (value['name'] === summary) {
           result =  '(dernière note : ' + value['averages']['student'] + ' , moy. de class : ' + value['averages']['studentClass'] + ')';
       }
    });

    return result;

}

module.exports = {
    getMarks
}