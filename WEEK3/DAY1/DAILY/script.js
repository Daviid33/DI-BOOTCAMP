// // EXCERCISE 1

// // Change the name of the div

// let socialNetworkNavigation = document.getElementById("navBar");
// socialNetworkNavigation.setAttribute("id", "socialNetworkNavigation");
// console.log(socialNetworkNavigation)


// // add li logoout


// let ulParents = document.getElementsByTagName("ul")
// let liChild = document.createElement("li");
// let textLi = document.createTextNode("Logout");
// liChild.appendChild(textLi);
// ulParents[0].appendChild(liChild);



// Exercise 2

// let richard = document.getElementsByTagName("ul");
// console.log(richard)
// let getrichard = richard[0];
// let robert = getrichard.lastElementChild
// console.log(robert);
// robert.textContent ="Richard"


// for (let i = 0; i < richard.length; i ++){
//     let david = richard[i];
// let david2 = david.firstElementChild
// david2.textContent = "ziv"

// }

// // add hey student 

// let ulParents = document.getElementsByTagName("ul")
// let liChild = document.createElement("li");
// let textLi = document.createTextNode("Hey students");
// liChild.appendChild(textLi);
// ulParents[0].appendChild(liChild);
// let UlParents = document.getElementsByTagName("ul")
// let LiChild = document.createElement("li");
// let TextLi = document.createTextNode("Hey students");
// LiChild.appendChild(TextLi);
// UlParents[1].appendChild(LiChild);


// // delete sarah

// let ulsarah = document.getElementsByTagName("ul")
// console.log(ulsarah)
// let lisarah = ulsarah[1];
// console.log(lisarah)
// let getsarah = lisarah.children[1].remove()
// // console.log(getsarah)


// Exercise 3

// document.body.firstElementChild.style.backgroundColor = "lightblue";
// document.body.firstElementChild.style.padding = "10px";

// let parent = document.getElementsByTagName("ul")
// let ulChild = parent[0]
// console.log(ulChild)
// ulChild.children[0].remove()

// ulChild.children[0].style.border = "solid 2px black"

// document.body.style.fontSize = "20px"





