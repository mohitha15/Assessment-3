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
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        incrementAge: function() {
            this.age++;
        }
    };
    return person;
}

// Demonstration of primitive data types
const description = "Person Object Manipulation";
let valid = true; 
let count = null; 
let undefinedValue; 
const uniqueSymbol = Symbol('unique'); 

const showDetails = () => console.log(`This is an example of an arrow function.`);
showDetails();
