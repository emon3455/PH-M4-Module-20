const student = {
    id: 117,
    name: "Emon",
    gender: "Male",
    age: 21,
    semister: 6,
    cgpa: 3.78
}

console.log(student);

// get all keys:
let keys = Object.keys(student);

// get all values:
let values = Object.values(student);
console.log(keys,"\n",values);

// ------------get element:-----------------
//  -----there is 3 different ways:------

// way-1:
var name = student.name;
console.log(name);

// way-2:
var age = student["age"];
console.log(age);

// way-3:
var keyName = "cgpa";
var cgpa = student[keyName];
console.log(cgpa);


// ------------set element:-----------------
//  -----there is 3 different ways:------

// way-1:
student.name = "Ariyan Emon";
console.log(student.name);

// way-2:
student["age"] = 22;
console.log(student["age"]);

// way-3:
var keyName = "cgpa";
student[keyName]= 3.87;
console.log(student[keyName]);

