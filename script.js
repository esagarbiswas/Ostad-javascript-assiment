// Sum Calculator
function calculateSum(a, b) {
  return a + b;
}

function displaySum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("sumResult").innerText =
    "Sum: " + calculateSum(num1, num2);
}

// Even Number Checker
function isEven(n) {
  return n % 2 === 0;
}

function checkEven() {
  let num = parseInt(document.getElementById("num").value);
  if (isEven(num)) {
    document.getElementById("evenResult").innerText =
      "Result: " + num + " is an even number";
  } else {
    document.getElementById("evenResult").innerText =
      "Result: " + num + " is not an even number";
  }
}

// Arrays Larger Number Finder
function findMax(arr) {
  return Math.max(...arr);
}

function displayMax() {
  let input = document.getElementById("maxArray").value;
  let numArray = input.split(",").map(Number);
  let maxNumber = findMax(numArray);
  document.getElementById("lrgResult").innerText =
    "Largest Number: " + maxNumber;
}
// Filter Odd Numbers
function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

function displayOddNumbers() {
  let input = document.getElementById("numberArray").value;
  let numArray = input.split(",").map(Number);
  let oddNumbers = filterOddNumbers(numArray);
  document.getElementById("filresult").innerText =
    "Odd Numbers: " + oddNumbers.join(", ");
}
// Word Count
function countWords(str) {
  let words = str.trim().split(/\s+/);
  return str.trim() === "" ? 0 : words.length;
}

function displayWordCount() {
  let inputText = document.getElementById("textInput").value;
  let wordCount = countWords(inputText);
  document.getElementById("wordCountResult").innerText =
    "Word Count: " + wordCount;
}

// Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function displayUniqueArray() {
  let input = document.getElementById("arrayInput").value;
  let newArray = input.split(",").map(Number);
  let fArray = removeDuplicates(newArray);
  document.getElementById("removresult").innerText =
    "Unique Array: " + fArray.join(", ");
}
