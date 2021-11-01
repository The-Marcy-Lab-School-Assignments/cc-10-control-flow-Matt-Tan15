//1
function greatestOfTwo(num1,num2) {
  if(num1 > num2) {
      return num1;
  } else {
      return num2;
  }
}

//2
function greatestOfThree(num1,num2,num3) {
  if(num1 > num2 && num1 > num3) {
      return num1;
  } else if(num2 > num1 && num2 > num3) {
      return num2;
  } else {
      return num3;
  }
}

//3
function greatestOfFour(num1,num2,num3,num4) {
  if(num1 > num2 && num1 > num3 && num1 > num4) {
      return num1;
  } else if(num2 > num1 && num2 > num3 && num2 > num4) {
      return num2;
  } else if(num3 > num1 && num3 > num2 && num3 > num4) {
      return num3;
  } else {
      return num4;
  }
}

//4
function leastOfFour(num1,num2,num3,num4) {
  if(num1 < num2 && num1 < num3 && num1 < num4) {
      return num1;
  } else if(num2 < num1 && num2 < num3 && num2 < num4) {
      return num2;
  } else if(num3 < num1 && num3 < num2 && num3 < num4) {
      return num3;
  } else {
      return num4;
  }
}

console.log(greatestOfTwo(1, 14)); //returns 14
console.log(greatestOfTwo(-2, 2)); // returns 2
console.log(greatestOfThree(-5, -2, -6)); // returns -2
console.log(greatestOfThree(3, 2, 11)); // returns 11
console.log(greatestOfFour(-5, -2, -6, 0)); // returns 0
console.log(greatestOfFour(10, 2, 6, 11)); // returns 11
console.log(leastOfFour(-5, -2, -6, 0)); // returns -6
console.log(leastOfFour(10, 2, 6, 11)); // returns 2