
// Scope Practice
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            const name = names[index];

            console.log(name + ' was found at index ' + index);
        }
    }
    actuallyPrintingNames();
}
printNames(beatles);

// Destructuring
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// Old way
// var email1 = person.email
// var firstAnimal1 = animals[0]
// console.log("\n", email1, firstAnimal1, '\n')

// New Way ES6
// const { email } = person
// const [firstAnimal] = animals
// console.log("\n", email, firstAnimal)
const password = '12345';
const { email, password: password1 } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;

console.log('\n', email, password, firstAnimal, secondAnimal, thirdAnimal)

// This is how you rename destructured vars
const { password: hashedPassword } = person;

const person2 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

// Nested Destructuring
const {addresses: [washington, {city: london}]} = person2
console.log(washington, '\n', london)

const {addresses: [{zipcode: whiteHouse}, ]} = person2

console.log(whiteHouse)



let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
        ? `Cannot Afford you are $${itemPrice-accountBalance} short`
        : "Can Afford"

}

console.log(canAfford(100, 500))


/// CallBack Functions

var exampleFunction = (message) =>{
    console.log(message)
}

function parentFunction(callback){
    callback("Info from parent")
}

exampleFunction("Hello")
parentFunction(exampleFunction)

parentFunction( function(message){
    console.log(message)
} )

const arr = [1,2,3,4]
arr.push(5)

const arr2 = Object.freeze([1, 2, 4, 5])
// arr2.push(7)  Throws an error

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
// items.sort(); // this will throw an error 

const sortedItems = [...items].sort()
console.log(sortedItems)

const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();
// this will return [10, 12, 22, 3, 5, 8 ]
// Sort accecpts a sort function returns a-b (neg, 0, or pos num)
numbers.sort(function(a, b){return a-b})
console.log(numbers)

// .map()
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` ); // map function
console.log(groceryList)

var animals1 = [2, 5, 6, 5, 9]
var moreAnimals = animals1.map(num => num*3)
console.log(moreAnimals)