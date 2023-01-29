const student = {
    name: "emon",
    id : 117,
    cgpa: 3.78,
    semister: 6
}

// to see all of then using loop there is 2 way:

// way-1:
var keys = Object.keys(student);

for(var i =0 ; i< keys.length ; i++){
    var keyName  = keys[i];
    var vales = student[keyName];
    console.log(keyName,vales);
}

// ------------------------------------------------------
console.log("----------------------------");
// way-2:

for (const keyName in student) {
    var vales = student[keyName];
    console.log(keyName , vales);
}
