// console.log("hello world!");
// console.log(typeof "ayush");
// console.log(typeof 44);
// console.log(typeof true);
console.log("------------String methods-----------");  
// string methods  
const myVariable = "ayush"
console.log(myVariable);
console.log(myVariable.length);
// index starts with 0
console.log(myVariable.charAt(3));
console.log(myVariable.indexOf("ay"));
console.log(myVariable.lastIndexOf("ay"));
console.log(myVariable.slice(2,3 ));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("ay"));

//split method 
//for example "ayush".split("y");  // o/p  ['a','ush']
console.log("ayush".split("y"));
console.log("ayush".split(""));
console.log("ayush,gevariya".split(","));
 

//JS NUMBERS AND METHODS
console.log("------------Number methods----------");

const myNumber = 44;
const myFloat = 44.1;
const myString = "44";

console.log(myNumber === myString); 
console.log(myNumber === myFloat); 
console.log(myFloat === myString); 
console.log(myString+4);
console.log(Number(myString)+6);
console.log(Number(myString) == myNumber);

//NaN--> not a number
console.log(Number("ayush"));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

// parsing method of Number
console.log(typeof Number.parseInt(myFloat));
console.log(typeof Number.parseInt(myString));
console.log(Number.isNaN("ayush"));
console.log(isNaN("ayush"));


console.log("-------------Math Methods-----------");
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.pow(2,5));
console.log(Math.min(2,5,0.1));
console.log(Math.max(2,5,0.1));

//it's provides pseudo random numbers from 0 to 1
// it includes zero but one
console.log(Math.random()*10 +1 );
//because if we don't add one we get num from 0 to 9 
//but not 10

//challenge problem
//write code that wil generate random characters from your name

console.log(typeof "ayush");
console.log("ayush".charAt(Math.floor(Math.random()*4)));
console.log("ayush".charAt(Math.floor(Math.random()*4)));
console.log("ayush".charAt(Math.floor(Math.random()*4)));
console.log("ayush".charAt(Math.floor(Math.random()*4)));
console.log("ayush".charAt(Math.floor(Math.random()*4)));


console.log("--------Condition Statements--------");

//IF statement

/* if(condition){

}else{

}
*/

let soup = "tommto soup";
let reply;
if(soup){
    reply = `here's your order of ${soup}`;
}
else if(true){
}else{

    reply = `sorry, we're out of ${soup}`;
}

console.log(reply);

//switch statement

/* switch(expression or value){

    case choice1:
        break;
    case choice2:
        break;
    default:  //it will be executed when none of choice is statisfied 
}
*/


//basic logic for rock,paper and scissors game

console.log("it's play time");

let playerOne = "rock";
let computer = "rock";

switch(playerOne){
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if(computer === "paper"){
            console.log("computer wins!");
        }
        else {
            console.log("playerOne wins!");
        }
        break;
    case "paper":
            if(computer === "scissors"){
                console.log("computer wins!");
            }
            else {
                console.log("playerOne wins!");
            }
            break;
    case "scissors":
                if(computer === "rock"){
                    console.log("computer wins!");
                }
                else {
                    console.log("playerOne wins!");
                }
                break;
  default: console.log("please enter a valid input");

}

//Ternary operator
//syntax =>  condition ? ifTrue ? ifFalse ? ;

console.log("Ternary operator demo");

console.log(0 ?"True":"False");

let testScore = 88;
console.log(testScore > 80 ? "A" : testScore > 70 ? "B" : testScore> 60 ? "C" : "fail");

console.log("--------User Input--------");
 

//User Input
// alert("Hello World!");
// let myBoolean = confirm("Ok === Ture\nCancel === False");
// console.log(myBoolean);

// let name = prompt("Please enter your name.");
//now check what type of data we get
// console.log(typeof name);

// if(name){
// console.log(name.trim() ?? "You didn't enter your name.");
// }else{
//     console.log("You didn't enter your name."); 
// }
 

//Your first user interactive game

// let playGame = confirm("Shall we play rock, paper, or scissors?");
// if(playGame){
//   //play
//   let playerChoice = prompt("Please enter rock, paper, or scissors.");
//   if(playerChoice){
//    let playerOne = playerChoice.trim().toLowerCase();
//    if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
//      let computerChoice = Math.floor(Math.random() * 3 +1);
//      let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
      
//      let result = playerOne === computer ? "Tie game!" 
//      : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\n computer: ${computer}\n
//      Computer Wins!`
//      : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\n computer: ${computer}\n
//      Computer Wins!`
//      : playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\n computer: ${computer}\n
//      Computer Wins!`
//      :`playerOne: ${playerOne}\n computer: ${computer}\n
//        playerOne Wins!`;
//       alert(result); 
//     let playAgain = confirm("Play Again");
//     playAgain ? location.reload() : "Ok, thanks for playing";
//     }
//    else{
//     alert("You didn't enter rock, paper, or scissors.");
//    }
//   }
//   else{
//     alert("I guess you changed your mind. Maybe next time");
//   }
// }
// else{
//  alert("Ok, maybe next time.");
// }



console.log("------- Loops ----------");
//Loops
let num =0;
while(num <= 10){
    console.log(num++);
}

//do.. while,for is same as c++
//don't create an endless loop


console.log("--------- Functions ----------");

//Functions
//Methods = Built-in Functions
//Functions Declaration Syntax:

function sum(n1,n2){
    if(n2 === undefined)  return n1+n1;
    else
    return n1+n2;
}

console.log(sum(2)); 

function getUserNameFromEmail(email){
    return email.slice(0,indexof("@"));
}

// const getUserNameFromEmail = function(email){
//     return email.slice(0,indexof("@"));
// }

// const getUserNameFromEmail = (email) =>{
//     return email.slice(0,indexof("@"));
// }

// const userName = function (email){
//     return email.slice(0,email.indexOf('@'));
// }

// console.log(userName("ayush8914@gmail.com"));


//Scopes

//var, let, const

var x = 1; //in staring var is used /in legacy code var is used
var x =2; //if we redeclare the var variable then it doesn't through the 
//error
// but if we use let we get the error
console.log(x);

//const we can't change 

//now let's start with the globle scope 
var x= 1;
let y =2;
const z= 3;

//local scope
{
    let y = 4;
    const z = 5;
}

//Arrays

const myArray = []; // we can't reassign the array because of const
// myArray = arr;
//add elements to an array
myArray[0] = "ayush";
myArray[1] = 4444;
myArray[2] = true;

// //refer to an array
// console.log(myArray);

// //length property
// console.log(myArray.length);

// //last element in array
// console.log(myArray[myArray.length-1]);
// console.log(myArray[1]);

// myArray.push("school");
// console.log(myArray);
// const lastItem = myArray.pop();
// console.log(myArray);
// console.log(lastItem);

const newLength =myArray.unshift(44);
console.log(myArray);
console.log(newLength);

const firstItem = myArray.shift();
console.log(myArray);

//unshift adds elements to an array at the beginning
//push adds at the end

console.log(myArray[5]);
//we get undefined beacuse the element doesn't exist

//delete the element

// delete myArray[1];
// console.log(myArray);
// console.log(myArray[1]);

// alternative to overcome undefined 
// myArray.splice(1,1);
// console.log(myArray);
// console.log(myArray[1]);


//we can also use slice to replace the elements
// myArray.splice(1,1,44);
// myArray.splice(1,0,44);
// console.log(myArray);

const arr = ['a','b','c','d','e','f'];
// const arr1= arr.slice(2,5);

// console.log(arr1);


//reverse the array
// arr.reverse();
// console.log(arr);


//join method
// const newString = arr.join();  // it creates a new string and puts commas b/w elements

// const arr1 = newString.split(',');
// console.log(newString);
// console.log(arr1);
  

//concate method
const arr1 = ['a','b','c'];
const arr2 =['d','e','f'];
// const array = arr1.concat(arr2);
// console.log(array);

//there new way to do this insted of concate method
//using spread operator (...)
// const array = [...arr1,...arr2];
// console.log(array);


//access from multidimensional array
//just like c/c++ 
// const twod = [arr1,arr2];
// console.log(twod);  
// console.log(twod[0][1]);



//Objects 
//key-value pairs in curly braces
const myObj = {
 name:"ayush"
};

let anotherObj = {
    alive : true,
    answer : 44,
    hobbies : ["Eat", "Sleep" , "Code"],
    beverages : {
        morning :"Tea",
        afternoon : "thumpsup"
    }
};

console.log(anotherObj);


//error and error handling in javascript
//  "use stric"  throws an error
const variable ="Ayush";
console.log(variable);

const makeError = ()=>{
try{
// const name ="ayush";
// name= "sf";
throw new Error("This is a error");
}catch(err){
 console.warn(err.name);
 console.error(err.message);
 console.error(err.stack);
}
finally{
    console.log("...finally");
}
};
makeError();

// function customError(msg){
//     this.message = msg;
//     this.name = "customError";
//     this.stack = `${this.name} : ${this.message}`;

// }



//DOM   document Object Model

// const view1 = document.getElementById("view1");
// console.log(view1);

// const view2 = document.querySelector("#view2");
// console.log(view2);

// view1.style.display = "flex";
// view2.style.display = "flex";


//js event listener
// addEventListener("event", function,useCapture)  usercapture is optional
// readyStateChange   event 
// initApp();

// const initApp = ()=> {

// }
   
//Web Storage API
 

//not part of the dom - refers to the window api
//Available to the JS via the global variable - window

//we don't have to typr window. it is implied:

// window.alert(window.location);
// alert(location);

// const myObject = {
//     name: "ayush",
//     hobbies: ["eat","sleep"],
//     logName: function() {
//         console.log(this.name);
//     }
// }

// const myArray1 = ["eat","sleep","code"];

// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// let mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);  // but that's not really what we want
  
//now lets try with myArray1 


// sessionStorage.setItem("mySessionStore", myArray1);
// mySessionData = sessionStorage.getItem("mySessionStore") ;
// console.log(mySessionData); 

// now lets try with JSON

// sessionStorage.setItem("mySessionStore", JSON.stringify(myArray1));
//  mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);


// sessionStorage and localStorage stores the string otherwise try to convert

//JSON looses the method 

//LocalStorage - we have persistent storage even after we leave the site
 
// localStorage.setItem("localStore", JSON.stringify(myObject));
// // localStorage.removeItem("localStore"); // it gets null as result so handle it this case also
// let localData = JSON.parse(localStorage.getItem("localStore"));
// const length = localStorage.length;
// console.log(localData); 
// console.log(length);

 


//JS Modules 

/* <script type = "module" src="js/main.js"></script> */

//  export const playGuitar = () =>{
//     return "Playong guitar";
//  }

//  export const shredding = () => {
//     return "Shredding some licks";
//  }

//  export const plucking = () =>{
//     return "Plucking the strings";
//  }

//  export default playGuitar; 
//  export {
//     shredding,plucking
//  };

// other way is inline   add export key word at front


//import the function in other files

// import playGuitar from "./filename.js";

// import {shredding,plucking}  from "./filename";
//console.log(shredding()); 

// Another way to import 
// import * as Guitars from "./filename";
// console.log(Guitars.plucking());

// we can export the class
// for example

// export default class User{
//     constructor(email,name){
//      this._id = email;
//      this._name = name;
//     }

//     greeting(){
//         return `hi, my name is " + ${this._name}.`;
//     }
// }


// import User from "./User.js";
// const me = new User("email@email.com","ayush");
// console.log(me.greeting());





//higher order functions

//A higher order function is a function that does at least one 
// of the following:
// ** Takes one or more arguments(parameters)
// ** returns a function as the result 


// Fetch / Async / Await

//Fethc api requires a discussion of...
// callbacks, promises, Thenables, and Async/Await

//callbacks

// function firstFun(papameters, callback) {
//     callback();
// }

// promises
// 3 states: pending,fulfilled,rejected

const myPromise = new Promise((resolve, reject) =>{
    const error = false;
    if(!error) {
        resolve("yes, resolve promise");
    }else{
        reject("no, reject promise ");
    }
});

console.log(myPromise); 

myPromise.then(value => {
    console.log(value+1);
}).then(newvalue => {
    console.log(newvalue);
}).catch(error => {
    console.error(error);
});


// const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending
// console.log(users);  

// fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
//     // console.log(response);
//     return response.json();
// }).then(data =>{
//     // console.log(data);
//     data.forEach(user => {
//         console.log(user);
//     });
// })


//Async / Await

const myUsers ={
    userList : []
};
// async function myCoolFunction(){
    
// }

const myCoolFunction = async()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  console.log(jsonUserData);
  return jsonUserData;

} 

// myCoolFunction();

const myAnotherFunction = async()=>{
    const data = await myCoolFunction();
    console.log(data);
}

myAnotherFunction();


//Regular expression
 
// regexr.com


// console.clear();