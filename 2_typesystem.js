"use strict";
let name1 = "Niraj";
let age1 = 24;
let date = new Date();
// ------------------------------------------
// any type
let myData = "Niraj";
myData = 20;
myData = ["ABC", "DEF"];
// ------------------------------------------
// unknown type
function multiplyNumber(number) {
    if (typeof number == "number") {
        return number * 2;
    }
    return "Invalid Number";
}
