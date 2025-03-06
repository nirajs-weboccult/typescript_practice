"use strict";
let stringOrNumber = 123123;
function printData(data) {
    if (data) {
        return data;
    }
    return "this is undefine value";
}
let dataEnter = undefined;
console.log(printData(dataEnter));
