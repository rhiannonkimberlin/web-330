/*
============================================
; Title:  kimberlin-exercise1.4.js
; Author: Professor Krasso
; Date:   August 10 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 1.4 Duck Typing
;===========================================
*/

var header = require('./Kimberlin-header.js');
// start program

function car(model) {
    this.model = model;
}
car.prototype.start = function(){
    console.log("Car added to the racetrack!");
}

function truck(model, year) {
    this.model = model;
    this.year = year;
}
truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
}

function jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}
jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack!")
}

var racetrack = [];

function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

var sonic = new car("Sonic");
var fordF150 = new truck("F150", "2020");
var wrangler = new jeep("Wrangler", "2020", "Blue");

console.log("")

driveIt(sonic);
driveIt(fordF150);
driveIt(wrangler);

console.log("")
console.log("-- The following vehicles have been added to the racetrack --")

for (var i=0; i<racetrack.length; i++){
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model)
}
// end program
