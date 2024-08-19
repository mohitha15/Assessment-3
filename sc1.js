document.getElementById('calculateBtn').addEventListener('click', () => {
    let input = document.getElementById('numbersInput').value;
    let numbersArray = input.split(',').map(Number);
    let result = calculateEvenSum(numbersArray);
    document.getElementById('result').textContent = `Sum of Even Numbers: ${result}`;
});

function calculateEvenSum(arr) {
    let sum = 0; 
    const isArrayValid = Array.isArray(arr); 

    const description = "Sum of Even Numbers Operation";  
    let count = 0;  
    let valid = true; 
    let nullValue = null;  
    let undefinedValue;  
    const uniqueSymbol = Symbol('unique');  

    if (isArrayValid && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sum += arr[i]; 
                count++;
            }
        }
    } else {
        valid = false;
    }
    return valid ? sum : 'Invalid array input';
}

// Additional Array and Object Operations
let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let modifiedArray = modifyArray(sampleArray);

function modifyArray(arr) {
    arr.push(11);
    arr.pop(); 
    arr.shift(); 
    arr.unshift(0);  
    let splicedArray = arr.splice(2, 3); 
    let slicedArray = arr.slice(1, 3); 
    return arr; 
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
