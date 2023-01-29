const student = {
    id: 117,
    name: "Emon",
    gender: "Male",
    age: 21,
    semister: 6,
    cgpa: 3.78
}

console.log(student);

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

console.log(student);