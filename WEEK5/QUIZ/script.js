//1. How to access the second element of the array `let arr = [3, 7, 10]
// let arr = [3, 7, 10]
// let secondElement = arr[1];
// console.log(secondElement)


// 2.For the code below, what does `arrNums.splice(2, 0)` return?
// let arrNums = [1, 2, 3, 4, 5];
// It return [1, 2, 3, 4, 5];

// 3. What is the result of the following code :
// [4, 5, 6, 1, 2, 3, 7, 8, 9]

// 4. What does the following code print to the console?
// callaway

// // 5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
    // const x = function(a, b){
    //    return a*b;
    // }
    // Yes we can

    // 6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain
//   global variable are always created outside the function, doesnt matter if there are a key word or not. If its created inside the function its a local variable

 // 7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?
 // YES we can and it returning hello javascript

//  8.Transform this function into an arrow function
    // const sum = (num1, num2) =>{
    //     return num1 + num2
    //   }
    //   sum(40,2)
    //   sum(42,0)
    //   console.log("the answer to everything is", sum(42,0))


    // 9. What does the following code print to the console? Explain the process and concept behind it

    // function foo () {
    //     function bar() {
    //       return "Poppin' bottles";
    //     }
    //     return bar();
    //   }
    //   console.log(foo());
// the code print Poppin bottles

// 10. Which of the following events will you add in the `addEventListener()`method? 
//       ☐ click  this one!!!!
//       ☐ onclick

// 11. Does the `addEventListener()` method allow you to add many events to the same element?
// Yes it is

// 12. DOM exercise

//  let btn = document.getElementById("btn")
//  btn.addEventListener("click", () => {
//      let para = document.createElement("p")
//      let text = document.createTextNode("New paragraphe");
//     para.appendChild(text) 
//     document.body.appendChild(para)
    
//  })

//  14. What is the value of `passed` in the following code?

// let marks = [67, 60, 89, 90, 67, 42];
     
// let passed = marks.every(function(m) {
//    return m >= 50;
// });
// The value is FALSE

// 15. What does the following code log?

// let nums = [10, 50, 88];
   
//    let bignums = nums.filter(function(n) {
//       return n > 10;
//    });
//    its loging a new array with numben bigger than 10 so [50, 88]

// 16. Use a javascript array method to square the value of every element in the array. 
// const input = [ 1, 2, 3, 4, 5 ];

// input.forEach(function(element, index, array){
//     array[index] = element* element;
// });
// console.log(input);


// 16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 

// const secondInput = [ 1, -4, 12, 0, -3, 29, -150];

// let bignums = secondInput.filter(function(element) {
//           return element > 0;
//        });
//        console.log(bignums)

   
//      let total = bignums.reduce ((accumulator, element) => accumulator + element)
//        console.log(total)

// 17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

// 18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example

// 19. What will be printed in the console

// Chocolate Cake is for $ 10

// 20. Refactor this code using Classes

// function Item(name, price) {
//     this.name = name;
//     this.price = price;
//     this.displayInfo = function() {
//     console.log(this.name + " is for $ " + this.price)
//     }
//  } 

//  const cake = new Item("Chocolate Cake", 10);
//  cake.displayInfo();

//  class Item{
//      constructor(name, price){
//          this.name = name
//          this.price = price
//          this.displayInfo = function() {
//             console.log(this.name + " is for $ " + this.price)
//             }
//      }
//  }
//  const cake = new Item("Chocolate Cake", 10);
//  cake.displayInfo();

// 21. What will be the output and why ? What will be the state of the promise ?
// The output will be SUCESS ! and the state = 200

// 22. What log will be made by the following code, after 2 seconds?

// it will be ok

// 23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process


// 24. Use async await, and fetch to a fact on cats and display it `https://catfact.ninja/fact`. 
