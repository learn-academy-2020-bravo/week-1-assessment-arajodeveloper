// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212


//create a function that takes an argument
const boilingPoint = (temp) => {
  //if: else if: else (below boiling point, at boiling point(122), above boiling point)
  if(temp <= 35) {
    return `${temp} is at below boiling point.`
  }
  else if(temp >= 212 && temp < 350) {
    return `${temp} is at boiling point.`
  }
  else if(temp >= 350) {
    return `${temp} is above boiling point.`
  }
  else {
    return null
  }
}
console.log(bolingPoint(temp1));





// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

const multiplyBy5 = (number) => {
  for(let i of array) {
    return number * 5
  }
}
console.log(multiplyBy5(myNumbers1));



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]




// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"





// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42




// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]



// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"
