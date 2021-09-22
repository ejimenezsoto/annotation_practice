// This is a functin that doesnt take in any parameters
function addNumbers() {

  // firstNum is declared and set to 9
  var firstNum = 9

  // secondNum is declared and set to 14
  var secondNum = 14

  // firstNum is reasigned to 3
  firstNum = 3

  // secondNum is reasigned to 4
  secondNum = 4

  // nums is declared as an array with firstNum and secondNum
  var nums = [firstNum, secondNum]

  // product is decalred and equal to firstNum multiplied by secondNum
  var product = firstNum * secondNum

  // sum is decalred and equal to firstNum plus secondNum
  var sum = firstNum + secondNum

  // average is declared and set equal to sum divided by num length
  var average = sum / nums.length

  // print the first element of nums (3)
  console.log(nums[0])

  // print the first element of nums (4)
  console.log(nums[1])

  // will not run num1 and num2 are not defined
  console.log(`The first number is ${num1} and the second number is ${num2}!`)
  // will not return sum if log above does not get fixed
  return sum
}
