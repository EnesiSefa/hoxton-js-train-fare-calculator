
//- Ask the user for their age 
//and how far they are travelling (in km)
// -- The price per travelled km will be £0.21
// -- Junior passengers (under 18) get a 20% discount
// -- Senior passengers (over 65) get a 40% discount
// - Based on the answers, 
//  print a message in the console which tells 
// the user how much they will need to pay for the ride.


//Challenge
//Rewrite your program so that the user chooses a starting point 
//and a destination from a list of stations, 
//besides inputting their age, and then get the ticket price. 

//You can come up with the stations' names and distances. 
//Try also to code it so 
//that you only need to change the price per km in one place, 
//and all the stations should have the updated price





// basic 
let age = Number(prompt("what is your age?"))
const pricePerKm = 0.21
const under18Discount = 0.8 
const over65Discount = 0.6 
let travelDistance = Number(prompt("How many km you'd like to travel"))

let travelPrice = travelDistance * pricePerKm

 

let totalPay
    if( age < 18 ){
 totalPay =  travelPrice * under18Discount
 console.log("for You will pay: " +"£" + totalPay.toFixed(2))
} 
else if( age > 65) {
    totalPay =  travelPrice * over65Discount
    console.log("You will pay: " +"£" + totalPay.toFixed(2))

} 
else {

    console.log("You will pay: " +"£" + travelPrice.toFixed(2))
}
    


// challenge

if(travelDistance = 5){
    console.log("first station")
}









