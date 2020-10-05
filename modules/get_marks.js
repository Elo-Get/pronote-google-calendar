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
       	   if (value['averages']['student'] === -1 || value['averages']['student'] === -1){
       	   		studentMark = 'Non Noté/Absent';
       	   } else {
				studentMark = value['averages']['student']
       	   }
           result =  '(dernière note : ' + studentMark + ' , moy. de class : ' + value['averages']['studentClass'] + ')';
       }
    });

    return result;

}

module.exports = {
    getMarks
}
