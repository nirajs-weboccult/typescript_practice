"use strict";
// Example Of Symbol Type in Typescript
let id = Symbol(7634278);
let text = Symbol("niraj");
console.log(id);
console.log(text);
let obj = {
    [text]: "123",
    name: "niraj",
    getData() {
        return this[text];
    }
};
console.log(obj);
console.log(obj.getData());
// Primitive Types In Typescript
let myName = "niraj";
let myAge = 24;
let isActive = true;
let userData = undefined;
let userNullValue = null;
let integerData = 24234234234234234234n;
let unique = Symbol("234234");
