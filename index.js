// loop number 1 - 10

// for (var input = 1; input <= 10; input++) {
//   console.log(input);
// }

for (let x = 1; x <= 10; x++) {
  console.log(x)
}

// double the number in the array

let array = [1, 2, 3, 4, 5]
for (number of array) {
  number *= 2
  console.log(number)
}

// strings to upcase

let hash = (["hello", "goodbye"])
for (word of hash) {
  console.log(word.toUpperCase())
}





// Fibonacci number

function fibonacci(n) {
  var fibo = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}
fibonacci(12);
//  = 144 (1 * 2 * 3 * 4....)






// biggest common divisor

function greatestCommonDivisor(a, b) {
  var divisor = 2,
    greatestDivisor = 1;

  //if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2)
    return 1;

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

greatestCommonDivisor(14, 21);
//  = 7
greatestCommonDivisor(69, 169);
//  = 1




// Remove duplicate item from array

function removeDuplicate(arr) {
  var exists = {},
    outArr = [],
    elm;

  for (var i = 0; i < arr.length; i++) {
    elm = arr[i];
    if (!exists[elm]) {
      outArr.push(elm);
      exists[elm] = true;
    }
  }
  return outArr;
}

removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]);
//  [1, 3, 5, 6, 7, 8]


function removeDuplicate(array) {
  const noRepeats = []
  array.forEach((number) => {
    if (!noRepeats.includes(number)) {
      noRepeats.push(number)
    }
  })
  console.log(noRepeats)
}
removeDuplicate([1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 7, 8, 9])

// Reverse String

function reverse(str) {
  var rtnStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    rtnStr += str[i];
  }
  return rtnStr;
}

reverse('you are a nice dude');
//  "edud ecin a era uoy"

// Reverse string/ recursive
function reverse(str) {
  if (!str || str.length < 2) return str;

  return str.split('').reverse().join('');
}
reverse("hello")


// callback function

function doIt(onSuccess, onFailure) {
  var err = ...
  if (err) {
    onFailure(err)
  } else {
    onSuccess()
  }
}



// word length with array 
var words = ["the", "quick", "brown", "fox"];
var wordLengths3 = [];
var i; for (i = 0; i < words.length; i++) {
  var word = words[i];
  wordLengths3.push(word.length);
}

var words = ["the", "quick", "brown", "fox"];
var wordLengths3 = [];
for (let word of words) {
  wordLengths3.push(word.length)
  console.log(wordLengths3)
}

// log hello, canidate to the console
function greeter(greeting) {
  return function (greetee) {
    console.log(greeting + ", " + greetee + "!");
  }
}



// what does this print to the console
(function () {
  var a = b = 42;
})();

// undefined
console.log(typeof a);
// 42
console.log(typeof b);



// What does this print to the console
var a = 1;
function b() {
  a = 10;
  return;
  function a() { }
}
// b();
console.log(a);
// 1







// lucky sevens whiteboard problem (3 consecutive number = to 7)
function lucky_sevens(arr) {

  // if less than 3 elements then this challenge is not possible
  if (arr.length < 3) {
    return "not possible";
  }

  // because we know there are at least 3 elements we can
  // start the loop at the 3rd element in the array (i=2)
  // and check it along with the two previous elements (i-1) and (i-2)
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] + arr[i - 1] + arr[i - 2] === 7) {
      return true;
    }
  }

  // if loop is finished and no elements summed to 7
  return false;

}
lucky_sevens([2, 1, 5, 1, 0]);





// Clock whiteboard (find the angle of the hand)
function simpleClockAngle(num) {

  // we got 6 because 360/60 = 6
  // 360 represents the full number of a degrees in a circle and
  // 60 is the number of minutes on a clock, so dividing these two numbers
  // gives us the number of degrees for one minute
  return 6 * num;

}
simpleClockAngle(15);








// Sum of several arrays
function sum_array(arr) {
  // store our final answer
  var sum = 0;
  // loop through entire array
  for (var i = 0; i < arr.length; i++) {
    // loop through each inner array
    for (var j = 0; j < arr[i].length; j++) {
      // add this number to the current final sum
      sum += arr[i][j];
    }
  }

  return sum;
}
sum_array([[3, 2], [1], [4, 12]]);



function product(array) {
  product = 1
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      product *= array[i][j]
    }
  }
  console.log(product)
}
product([[1, 2, 3], [1], [2, 1]])






// find numbers between the test_divisors
function test_divisors(low, high) {

  // we'll store all numbers and strings within an array
  // instead of printing directly to the console
  var output = [];

  for (var i = low; i <= high; i++) {
    // simply store the current number in the output array
    output.push(i);
    // check if the current number is evenly divisible by 3
    if (i % 3 === 0) { output.push('div3'); }

  }
  // return all numbers and strings
  return output;
}
test_divisors(2, 10);






// return all the odd number in the array
function oddball_sum(nums) {
  // final count of all odd numbers added up
  var final_count = 0;
  // loop through entire list
  for (var i = 0; i < nums.length; i++) {

    // we divide by 2, and if there is a remainder then
    // the number must be odd so we add it to final_count
    if (nums[i] % 2 === 1) {
      final_count += nums[i]
    }
  }
  return final_count;
}
oddball_sum([1, 2, 3, 4, 5]);

// with reduce....

function oddball_sum(nums) {
  return nums.reduce(function (total, item) {
    if (item % 2 === 1) {
      return total += item;
    }
    return total;
  });
}






// reverse the string
var string = "Welcome to this Javascript Guide!";
// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");
// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}


// finds largest number of charters in the longest word of a sentence
function LongestWordLength(str) {

  let res = 0,
    curr_len = 0;

  for (var i = 0; i < str.length; i++) {

    // If current character is not
    // end of current word.
    if (str[i] !== " ") curr_len++;
    // If end of word is found
    else {
      res = Math.max(res, curr_len);
      curr_len = 0;
    }
  }

  // We do max one more time to consider
  // last word as there won't be any space
  // after last word.
  console.log(Math.max(res, curr_len));
}

//   var s = "I am an intern at geeksforgeeks";
//   document.write(LongestWordLength(s));
LongestWordLength("I am an intern at geeksforgeeks")


// Average of array and sum
function average(array) {
  sum = 0
  for (let number of array) {
    sum += number
  }
  average = sum / array.length

  console.log(sum)
  console.log(average)
}
average([1, 2, 3, 4, 5, 6])





// INTERVIEW QUESTION "REVERSE" string and add / remover / uppercase / lowercase




function reverseString(string) {
  let revStr = string.split(' ').reverse().join(' ')
  let removeLast = revStr.substring(1)
  let lowerCase = removeLast.substring().toLowerCase()
  // let capFirst = lowerCase[0].toUpperCase() + lowerCase.slice(1)
  // let addChar = capFirst.substring() + "!"
  // let array = addChar.split(' ')
  // let removeIndex2 = array.splice(0, 3, "right")



  console.log(revStr)
  console.log(removeLast)
  console.log(lowerCase)
  // console.log(capFirst)
  // console.log(addChar)
  // console.log(removeIndex2)
}
reverseString("It is bright today")








// 5 ways to reverse a string


const a = "Hello, my name is Shane"

function reverse(str) {
  console.log(str.split(" ").reverse().join(" "))
}
reverse(a)

function reverse2(str) {
  console.log([...str].reverse().join(""))
}
reverse2(a)

function reverse3(str) {
  let reversedString = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  console.log(reversedString)

}
reverse3(a)


function reverse4(str) {
  let rev4 = ""
  for (let char of str) {
    rev4 = char + rev4
  }
  console.log(rev4)
}
reverse4(a)




function reverse5(str) {
  console.log([...str].reduce((acc, char) => char + acc, ""))
}
reverse5(a)