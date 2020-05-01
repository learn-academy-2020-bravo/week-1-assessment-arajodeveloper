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
  //if: else if: else ( below boiling point, 122 is at boiling point, above boiling point)
  if(temp === 212) {
    return `${temp} is at boiling point.`
  }
  else if(temp < 212) {
    return `${temp} is at below boiling point.`
  }
  else if(temp > 212) {
    return `${temp} is above boiling point.`
  }
  else {
    return null
  }
}
console.log(boilingPoint(temp1));
console.log(boilingPoint(temp2));
console.log(boilingPoint(temp3));




// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

//create a function that takes array
//return the function each element of array multiply by 5
//uses for loop and each element will multiply by five
//push the result into the new array.

var myNumbers1 = [3, 7, 0, 6, -9]

const multiplyBy5 = (array) => {
  var newArr = []
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i] * 5)
  }
  return newArr

}
console.log(multiplyBy5(myNumers1));



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

//create a function that takes Array
//return value multiplied by 5 using a .map

var myNumbers2 = [8, -7, 0, 6, 2]

const multiplyByFive = (array) => {
  return array.map(value => value * 5)
}
console.log(multiplyByFive(myNumbers2));



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

//create a function that takes a string
//split the string
//create an array for vowels
//return string using .filter and .join the string

// Code for this is at question 5)

// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

//use the code that is created at question 4) but add the following
//create if statement for the case if the user do not put strings
//if typeof !== string
//return "give me a string"
//if typeof === string
//return all the  vowels removed


var notAString1 = true
var notAString2 = 42

const removeVowels = (string) => {
  if (typeof(string) !== "string"){
    return "give me a string"
  }
  let strArr = string.split("")
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  return strArr.filter(char =>  (!vowels.includes(char))).join("")
}

console.log(removeVowels(notAString1));
console.log(removeVowels(notAString1));

console.log(removeVowels(stringWithVowels1));
console.log(removeVowels(stringWithVowels2));


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

//create a function that takes Array
//return the objects that are only cat using .filter

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

const onlyCats = (array) => {
  return array.filter(value => value.animal === "cat")
}
console.log(onlyCats(toonimals));





// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

//create a function that takes Array
//return the objects that are non-cats using .filter
//apply .map to get out only the names
//.join the names 

const onlyCats1 = (array) => {
  return array.filter(value => !(value.animal === "cat")).map(value => '"' + value.name + '"').join(" ")
}
console.log(onlyCats1(toonimals));
