// Exercise 1

// let article = document.body.children[0];
// console.log(article);

// let firsth = article.firstElementChild;
// console.log(firsth);

// let lastP = article.lastElementChild;
// console.log(lastP);
// article.removeChild(lastP);
// console.log(article);

// let secondh = article.children[1]
// console.log(secondh);
// secondh.addEventListener("click", function ()  {
//     secondh.style.backgroundColor = "red"
// })

// let thirdh = article.children[2]
// console.log(thirdh);
// thirdh.addEventListener("click", function(){
//    thirdh.style.display ="none" 
// })


// let but = document.createElement("button")
// but.textcontent="click me"
// but.addEventListener("click", function(){
//     for( let i = 0; i < article; i ++)
// }
// )
// article.appendChild(but)

// Exercise 2

let form = document.body.firstElementChild;
console.log(form)

let fname = document.getElementById("fname")
console.log(fname)
let lname = document.getElementById("lname")
console.log(lname)
let submit = document.getElementById("submit")
console.log(submit)

let fname1 = document.getElementsByName("fname")
console.log(fname1)
let lname1 = document.getElementsByName("lname")
console.log(lname1)
let submit1 = document.getElementsByName("submit")
console.log(submit1)




let formDetails = document.forms[0]

function retrieveFomrinfo (evt) {
    evt.preventDefault();
    console.log("test")
    let firstInput = formDetails.elements[0].value;
    let secondInput = formDetails.elements[1].value;
    console.log(firstInput)
}
formDetails.addEventListener("submit", retrieveFomrinfo)







