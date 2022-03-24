// Exercise 1

// function infoAboutMe (){
//     let myAge = 20;
//     let myName = "david";
//     let myHobbies = "football"
//     console.log(`My age is ${myAge} im ${myName} and i play ${myHobbies}`)

// }

// infoAboutMe()

// Part 2

// function infoAboutPerson (personName, personAge, personFavoriteColor){

//     console.log(`your name is ${personName} you are ${personAge} and your fav colors is ${personFavoriteColor}`);
// }

// infoAboutPerson(`thomas`, 20, `red`)

// let a ="david";
// let b = 45;
// let c = "bleu";
// infoAboutPerson(a, b, c);

// let d ="josh";
// let e = 12;
// let f = "yellow";
// infoAboutPerson(d, e, f);

// Execercise 2

// function calculateTip(){


// }

// calculateTip()

// Exercise 3

// function isDivisible(){
//     let sum = 0;

//     for (let i = 0; i <= 500; i++) {
//         if(i % 23 == 0 ){
//             console.log(i);
//             sum = sum+i;
//             console.log(sum);

//         }

//     }
// }

// isDivisible()

// Exercise 4

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana", "orange", "apple"];

// function myBill(){
//     let total = 0;
//     for(let col of shoppingList){
//         if(stock[col]>0){
//             total += prices[col];

//         }  

//     }
//     console.log(total);
// }

// myBill()

// Exercise 5

// function changeEnough(itemPrice, amountOfChange){
//     let wallet = 0
//     let coins = [0.25, 0.1, 0.05, 0.1];
//     for (let i = 0; i < amountOfChange.length; i++ ){
//         wallet += Number(amountOfChange[i]) * Number(coins[i]);       
//     }
//     if(wallet >= itemPrice){
//         return true;
//     }
//     return false;

// }

// let c = changeEnough(4.25,[25, 20, 5, 0]);
// console.log(c);

// Exercise 6

function hotelCost(){
    let numberNights = 3;
    let priceForAllNights = 140*numberNights;
    return priceForAllNights;
 
}

function planeRideCost(){
    let destination = "New York";
    let priceDestination; 

    switch(destination){
        case "London":
          priceDestination = 183;
        break;
        case "Paris":
            priceDestination = 220;
        break;
        default:
            priceDestination = 300;
    }

    return priceDestination;

}


function totalVacationCost (){
    let costPlane = planeRideCost();
    console.log(`the plane costs ${costPlane}`);

    let costHotel = hotelCost();
    console.log(`the hotel costs ${costHotel}`);
    
}

totalVacationCost();




