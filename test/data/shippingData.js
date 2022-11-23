const faker = require('@faker-js/faker').faker
module.exports = 
[
    {
        email: faker.internet.email(),
        firstName: 'Vanessa',
        lastName: 'Russell',
        company: 'TestCorp',
        address: '2 Maxfield',
        city: 'Ocho Rios',
        postCode: [22222],
        phoneNumber: [8762222222]
    },
]