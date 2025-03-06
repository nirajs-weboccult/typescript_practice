// Combine Two Types is union types
//  THIS IS UNION TYPE IN TYPESCRIPT
type stringOrNumber = number | string
type numberOrUndefine = number | undefined
type stringOrUndefineOrNumber = string | undefined | number

let stringOrNumber = 123123

function printData(data:number|undefined){
    if(data){
        return data
    }
    return "this is undefine value"
}
let dataEnter:undefined = undefined
console.log(printData(dataEnter));


// Quick Conditional Types
type customDateData = Date
type csString = string

type trueString = customDateData extends string ? true : false
type conditionalNumber = customDateData extends Date ? number:undefined 