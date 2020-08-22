/*
============================================
; Title:  kimberlin-exercise-3.2.js
; Author: Professor Krasso
; Date:   August 22 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 3.2 The Factory Pattern
;===========================================
*/

var header = require('./Kimberlin-header.js');

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7;
}

//create oracle with 4 properties
function Oracle (properties) {
    this.username = properties.username || 'o-admin';
    this.password = properties.password || 'o-s3cret';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || 9.5;
}

//create informix with 3 properties
function Informix(properties) {
    this.username = properties.username || 'in-admin';
    this.password = properties.password || 'in-s3cret';
    this.server = properties.server || 'localhost:3030';
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === 'MySql') {
        this.databaseClass = MySql;
    } //update createDatabase functions to include new classes
    if (properties.databaseType === 'Oracle') {
        this.databaseClass = Oracle;
    }
    if (properties.databaseType === 'Informix') {
        this.databaseClass = Informix;
    }
    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//oracle factory
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle',
    username: 'Starbs4Lyfe',
    password: 'pwpwpw',
    version: '5.2'
});

//informix factory
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: 'happy',
    password: 'undertheradar'
});

console.log(oracle);
console.log("");
console.log(informix);
// end program


