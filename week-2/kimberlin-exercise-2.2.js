/*
============================================
; Title:  kimberlin-exercise1.3.js
; Author: Professor Krasso
; Date:   August 15 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 2.2 Prototypes
;===========================================
*/

var header = require('./Kimberlin-header.js');

// start program
var person = {
    getAge: function() {
        return this.age;
    }
}

var archer = Object.create(person, {
    "age": {
        "value": "25"
    },
    "fullname": {
        "value": "Archer Pierce"
    }
});

archer.getAge();
console.log("The person's full name is: '%s'", archer.fullname);
console.log("The person's age is: '%s'", archer.age )


// end program

