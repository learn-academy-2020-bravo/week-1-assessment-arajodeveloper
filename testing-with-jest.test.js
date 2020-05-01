// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
describe("addThemUp", () => {
  test("will return the sum of two numbers", () => {
    expect(addThemUp(2,3)).toEqual(5)
    expect(addThemUp(-4,3)).toEqual(-1)
  })
})

// // --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1, num2) => {
  return num1 + num2
}




// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.
describe("triangleArea", () => {
  test("will return the area of the triangle", () => {
    expect(triangleArea(2,4)).toEqual(4)
  })
})




// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (base, height) => {
  return (base * height) / 2
}
