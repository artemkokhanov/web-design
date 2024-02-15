// VARIABLES
// let: can reassign values
// const: use const all the time unless you know you are going to reassign a variable

// let age = 20;
// age = 31
// console.log(age);

// DATA TYPES
// String, Numbers, Boolean, null, undefined

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof name);

// CONCATENATION
// console.log('My name is ' + name + ' and I am ' + age);

// TEMPLATE STRING - better than concatenation
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// STRING PROPERTIES AND METHODS
// const s = 'Hello World!';
// console.log(s.length);

// console.log(s.toUpperCase()); // toUpperCase is a method, a method is /a function associated with an object
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// const s = 'technology, computers, it, code';
// console.log(s.split(', '))

// ARRAYS - variables that hold multiple values
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears', 10, true]; // more common way on constructing an array
// fruits[3] = 'grapes';

// fruits.push('mangos'); // useful if you don't know the size of the array

// fruits.unshift('strawberries') // add to the beginning

// fruits.pop(); // pop last element from array

// console.log(Array.isArray(fruits)); // checks if fruits is an array

// console.log(Array.isArray('hi')); // should return false because string is not an array

// console.log(fruits.indexOf('oranges')) // find index of input
// console.log(fruits);

// OBJECT LITERALS - key value pairs
// curly braces, i.e. {}, are another way for creating objects
// person is an object with properties given below

// const person = {
//    firstName: 'John',
//    lastName: 'Doe',
//    age: 30,
//    hobbies: ['music', 'movies', 'sports'],
//    address: {
//        street: '50 main st',
//        city: 'Boston',
//        state: 'MA'
//    }
// }
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city)

// const { firstName, lastName, address: { city } } = person; // think of this statement as pulling these attributes out of the person object and not assignment. We are pulling firstName out of the person object, etc. This is called DESTRUCTURING
// console.log(firstName);
// console.log(city);

// person.emails = 'john@gmail.com'; // adding a property
// console.log(person);

// ARRAYS OF OBJECTS
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// console.log(todos[1].text);

// JSON - a data format. Used a lot w/in full stack development, when sending and retrieving data from a server usually send it in JSON format

// const todoJSON = JSON.stringify(todos); // converts into JSON format (now ready to send this data to a server)
// console.log(todoJSON);

// FOR LOOPS
// for(let i = 0; i <= 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }

// WHILE LOOPS
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// LOOPING THROUGH ARRAY (using todos array from above)
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// BETTER METHOD FOR LOOPING THROUGH ARRAY
// for(let todo of todos) {
//     console.log(todo.text);
// }

// HIGH ORDER ARRAY METHODS
// forEach (used to execute the same code on every element in an array but does not change the array and it returns undefined)
// todos.forEach(function(todo) {
//     console.log(todo.text)
// })
// todos.forEach((todo) => console.log(todo.text)); // arrow function

// map (executes the same code on every element in an array and returns a new array with the updated elements)
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText)

// filter (checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria)
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// });
// console.log(todoCompleted)

// CONDITIONALS
// const x = 10;
// if(x == 10) {
//     console.log('x is 10');
// }

// const x = '10';
// if(x == 10) {
//     console.log('x is 10');
// }

// === matches data type as well as value
// const x = '10';
// if(x === 10) {
//     console.log('x is 10');
// }

// const x = 5;
// if(x === 10) {
//     console.log('x is 10');
// } else if(x > 10) {
//     console.log('x is greater than 10')
// } else {
//     console.log('x is less than 10');
// }

// const x = 4;
// const y = 11;
// if(x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }

// const x = 6;
// const y = 11;
// if(x > 5 && y > 10) {
//     console.log('x is more than 5 and y is more than 10');
// }

// TERNARY OPERATOR - short hand if statement
// const x = 'green';

// const color = x > 9 ? 'red' : 'blue'; // if x is greater than 9 then (?) set x to 'red' else (:) set x to 'blue'

// SWITCH
// const color = 'green';
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }

// FUNCTIONS
// function addNumbs(num1 = 1, num2 = 1) {
//     return num1 + num2;
// }
// console.log(addNumbs()); // if no default values, returns NaN (Not a Number)
// console.log(addNumbs(5,5));

// ARROW FUNCTIONS
// const addNumbs = (num1 = 1, num2 = 1) => { return num1 + num2; }
// const addNumbs = (num1 = 1, num2 = 1) => num1 + num2; // cleaner than above way of using arrow functions
// console.log(addNumbs(5,5));

// const addNumbs = num1 => num1 + 5;
// console.log(addNumbs(4));

// OBJECT ORIENTED PROGRAMMING (USE ES6)
// ES5
// Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Use prototype to add these functions into the prototype property of object
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Instantiate object
// const person1 = new Person('John', 'Doe', '1980-3-4');
// console.log(person1);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// CLASSES (ES6 - syntactic sugar) - does the exact same thing as above but a prettier way of writing the above (OOP I am used too):
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Instantiate object
// const person1 = new Person('John', 'Doe', '1980-3-4');
// const person2 = new Person('Mary', 'Smith', '1970-6-3');

// console.log(person2.getFullName());
// console.log(person1);

// DOM (Document Object Model) - a tree structure of your whole document
// SELECTORS

// Single element
// console.log(document.querySelector('.container')); // query works like JQuery

// Multiple element
// console.log(document.querySelectorAll('.item')); // can put anything - id, class, tag, etc...

// Iterating through class items
// const items = document.querySelectorAll('.item');
// items.forEach(item => console.log(item)); // do not need parentheses if single parameter for arrow function

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove(); // remove Item 3
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// EVENTS
// can look up all different events in online documentation

// const btn = document.querySelector('.btn');

// click event
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark') // bg-dark is from style.css
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// mouseover (hover) event
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark') // bg-dark is from style.css
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// APPLICATION
// grabbing everything from the DOM
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// listening for a submit event on the form
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000); // message disappears in 3 seconds
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li); // appending created element to ul which has an id of users

        // Clear field
        nameInput.value = '';
        emailInput.value = '';
    }
}