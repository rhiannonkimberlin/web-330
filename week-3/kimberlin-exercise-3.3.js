/*
============================================
; Title:  kimberlin-exercise-3.3.js
; Author: Professor Krasso
; Date:   August 22 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 3.3 The Singleton Pattern
;===========================================
*/

var header = require('./Kimberlin-header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

//import code
var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
        }
        return {
             getInstance: function() {
                if (!instance) {
                     instance = createInstance();
                }
            return instance;
    }
    }
   })();
 //create function specified
   function databaseSingletonTest () {
       var oracle = DatabaseSingleton.getInstance();
       var postgres = DatabaseSingleton.getInstance();

       console.log("Same database instance? %s", oracle === postgres);
   }
 
   databaseSingletonTest();

// end program