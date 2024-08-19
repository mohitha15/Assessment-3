document.getElementById('calc-submit').addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('calc-num1').value);
    let num2 = parseFloat(document.getElementById('calc-num2').value);
    let operator = document.getElementById('calc-operator').value;
    
    console.log('Number 1:', num1);
    console.log('Number 2:', num2);
    console.log('Operator:', operator);
    
    let result = simpleCalculator(num1, num2, operator);
    console.log('Result:', result);
    
    document.getElementById('calculator-result').textContent = `Result: ${result}`;
});

function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '%':
            return num1 % num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error: Division by zero';
            }
        
        default:
            return 'Invalid operator';
    }
}
