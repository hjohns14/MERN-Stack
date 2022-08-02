
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
const { addresses: [washington, { city: london }] } = person2
console.log(washington, '\n', london)

const { addresses: [{ zipcode: whiteHouse },] } = person2

console.log(whiteHouse)

const personCopy = { ...person2 };
console.log(personCopy)

const { firstName, lastName, ...attributes } = personCopy

console.log(firstName, lastName, attributes)

console.log(person2 === personCopy, person2.firstName === personCopy.firstName)

class Deck {
    constructor() {
        const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}

const deck1 = new Deck()

deck1.deck.forEach(card => {
    
    console.log(card)
}
)





