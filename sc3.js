document.getElementById('createPersonBtn').addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);

    // Creating the Person object
    const person = createPerson(firstName, lastName, age);

    // Displaying the person's full name and age
    document.getElementById('personDetails').textContent = `Full Name: ${person.getFullName()}, Age: ${person.age}`;
    document.getElementById('incrementAgeBtn').style.display = 'block';

    // Increment age on button click
    document.getElementById('incrementAgeBtn').addEventListener('click', () => {
        person.incrementAge();
        document.getElementById('personDetails').textContent = `Full Name: ${person.getFullName()}, Age: ${person.age}`;
    });
});

// Function to create the Person object
function createPerson(firstName, lastName, age) {
    // Object creation using let and const
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        // Method to return the full name
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        // Method to increment the age
        incrementAge: function() {
            this.age++;
        }
    };
    return person;
}

// Demonstration of primitive data types
const description = "Person Object Manipulation"; // String
let valid = true; // Boolean
let count = null; // Null
let undefinedValue; // Undefined
const uniqueSymbol = Symbol('unique'); // Symbol

// Arrow function example
const showDetails = () => console.log(`This is an example of an arrow function.`);

// Call the arrow function
showDetails();
