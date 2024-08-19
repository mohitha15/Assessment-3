document.getElementById('calculateBtn').addEventListener('click', () => {
    let input = document.getElementById('numbersInput').value;
    let numbersArray = input.split(',').map(Number);
    let result = calculateEvenSum(numbersArray);
    document.getElementById('result').textContent = `Sum of Even Numbers: ${result}`;
});

function calculateEvenSum(arr) {
    // 1. Variables and Data Types
    let sum = 0;  // Using let for block-scoped variable
    const isArrayValid = Array.isArray(arr);  // Check if the input is an array

    // Primitive Data Types demonstration
    const description = "Sum of Even Numbers Operation";  // String
    let count = 0;  // Number
    let valid = true;  // Boolean
    let nullValue = null;  // Null
    let undefinedValue;  // Undefined
    const uniqueSymbol = Symbol('unique');  // Symbol

    // 2. Operators and 3. Control Structures
    if (isArrayValid && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sum += arr[i];  // Use of += operator
                count++;
            }
        }
    } else {
        valid = false;
    }

    // Return the result or a message based on validity
    return valid ? sum : 'Invalid array input';
}

// Additional Array and Object Operations

let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let modifiedArray = modifyArray(sampleArray);

function modifyArray(arr) {
    arr.push(11);  // Add elements using push
    arr.pop();  // Remove last element using pop
    arr.shift();  // Remove first element using shift
    arr.unshift(0);  // Add element at the beginning using unshift
    let splicedArray = arr.splice(2, 3);  // Splice the array
    let slicedArray = arr.slice(1, 3);  // Slice the array
    return arr;  // Return the modified array
}

// Object Declaration
const operationDetails = {
    operationName: 'Array Modification',
    originalArray: sampleArray,
    modifiedArray: modifiedArray,
    performedOn: new Date(),
    performedBy: 'ArrayOperations Script'
};

// Logging object properties
console.log(`Operation Name: ${operationDetails.operationName}`);
console.log(`Original Array: ${operationDetails.originalArray}`);
console.log(`Modified Array: ${operationDetails.modifiedArray}`);
console.log(`Performed On: ${operationDetails.performedOn}`);
console.log(`Performed By: ${operationDetails.performedBy}`);
