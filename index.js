
//- Ask the user for their age 
//and how far they are travelling (in km)
// -- The price per travelled km will be £0.21
// -- Junior passengers (under 18) get a 20% discount
// -- Senior passengers (over 65) get a 40% discount
// - Based on the answers, 
//  print a message in the console which tells 
// the user how much they will need to pay for the ride.






let age = Number(prompt("what is your age?"))
const pricePerKm = 0.21
const under18Discount = 0.2 
const over65Discount = 0.4 
let travelDistance = Number(prompt("How many km you'd like to travel"))

let travelPrice = travelDistance * pricePerKm

 

let totalPay
    if( age < 18){
 totalPay =  travelPrice * (1 -under18Discount)
 console.log("You will pay: " +"£" + totalPay)
} 
else if( age > 65) {
    totalPay =  travelPrice * (1-over65Discount)
    console.log("You will pay: " +"£" + totalPay)

} 
else {

    console.log("You will pay: " +"£" + travelPrice)
}
    












