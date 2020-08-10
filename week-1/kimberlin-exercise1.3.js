/*
============================================
; Title:  kimberlin-exercise1.3.js
; Author: Professor Krasso
; Date:   August 10 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 1.3 Class Refresher
;===========================================
*/

var header = require('./Kimberlin-header.js');

function cellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function(){
        return this.price;
    }
    this.getModel = function(){
        return this.model;
    }
    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + 
        "\nModel: " + this.getModel() +
        "\nColor: " + this.color +
        "\nPrice: " + this.getPrice();
    }
}

var cellPhone = new cellPhone("Apple", "iPhone 11", "Purple", "$479")
console.log(cellPhone.getDetails())

// end program