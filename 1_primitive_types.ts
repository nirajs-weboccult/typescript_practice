// Example Of Symbol Type in Typescript
let id:symbol = Symbol(7634278)
let text:symbol = Symbol("niraj")

console.log(id);
console.log(text);

let obj = {
    [text]:"123",
    name:"niraj",
    getData(){
        return this[text]
    }
}
console.log(obj);
console.log(obj.getData());

// Primitive Types In Typescript
let myName:string = "niraj"
let myAge:number = 24
let isActive:boolean = true
let userData:undefined = undefined
let userNullValue:null = null
let integerData:bigint = 24234234234234234234n
let unique:symbol = Symbol("234234")
