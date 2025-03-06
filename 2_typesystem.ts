// Type Alias
type customString = string
type customNumber = number
type customDate = Date

let name1:customString = "Niraj"
let age1:customNumber = 24
let date:customDate = new Date()

// ------------------------------------------
// any type
let myData:any = "Niraj"
myData = 20
myData = ["ABC","DEF"]


// ------------------------------------------
// unknown type
function multiplyNumber(number:unknown){
    if(typeof number == "number"){
        return number*2;
    }     
    return "Invalid Number"
}    
