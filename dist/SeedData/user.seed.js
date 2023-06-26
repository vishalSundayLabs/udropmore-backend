"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomUser = void 0;
// Array to store the random user objects
const users = [];
// Random first names
const firstNames = ['John', 'Emma', 'Michael', 'Sophia', 'David', 'Olivia'];
// Random last names
const lastNames = ['Smith', 'Johnson', 'Brown', 'Lee', 'Garcia', 'Davis'];
// Random middle names
const middleNames = ['William', 'Elizabeth', 'James', 'Grace', 'Alexander', 'Mia'];
// Random email domains
const emailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com'];
// Random user types
const userTypes = ['ADMIN', 'USER'];
// Generate a random phone number
function generatePhoneNumber() {
    let phoneNumber = '+';
    for (let i = 0; i < 10; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
}
// Generate a random user object
const generateRandomUser = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const middleName = middleNames[Math.floor(Math.random() * middleNames.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomains[Math.floor(Math.random() * emailDomains.length)]}`;
    const phoneNumber = generatePhoneNumber();
    const userType = userTypes[Math.floor(Math.random() * userTypes.length)];
    return {
        firstName,
        lastName,
        middleName,
        email,
        phoneNumber,
        userType
    };
};
exports.generateRandomUser = generateRandomUser;
