var {faker} = require("@faker-js/faker")
var express = require('express');
var router = express.Router();

const createUser = () => {
    const newFake = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        _id: faker.random.alphaNumeric(25)

    }
    return newFake
}

const createCompany = () =>{
    const newCompany ={
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany
}

router.get("/", (req, res) => {
    res.json({
        message: "Hello WOrld",
        content: {
            name: "Hunter"
        }
    });
});

router.get("/users/new", (req, res) =>{
    res.json(createUser())
})

router.get("/company/new", (req, res) =>{
    res.json(createCompany())
})

router.get("/user/company", (req, res) =>{
    res.json({user: createUser(), company: createCompany()})
})






module.exports = router;