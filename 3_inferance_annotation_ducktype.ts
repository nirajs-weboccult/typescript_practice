// Its look  like duck and quacks like a duck, it's duck

// Declaration
type customString1 = string
type customNumber1 = number
type customDate1 = Date
// annotation
let name2:customString1 = "Niraj"
let age2:customNumber1 = 24
let date2:customDate1 = new Date()



function getSumOfTwoNumbers(a:number,b:number){
    return a+b;
}
// Inference
let finalResult = getSumOfTwoNumbers(10,30)