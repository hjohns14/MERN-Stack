
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

