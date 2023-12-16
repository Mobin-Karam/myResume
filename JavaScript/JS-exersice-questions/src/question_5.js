'use strict'

//^ #5 

<<<<<<< Updated upstream
let getSina = new Date();

const text = document.getElementById('Text')

const authAge = 18;
const firstName = prompt('What is your First Name ?')
const lastName = prompt('What is your Last Name ?')
const getBirthYear = Number(prompt('When you born ?'));

const checkNameLength = (firstName.length >= 3, firstName.length <= 20, lastName.length <= 20, lastName.length >= 3)

let currentYear = getSina.getFullYear();

let age = currentYear - getBirthYear;

if (firstName !== "") {
    if (firstName.length >= 3, firstName.length <= 20) {
        console.log('FirstName be Checked ✅')
        if (lastName.length >= 3, lastName.length <= 20) {
            console.log('LastName be Checked ✅')
        }
    }
} else if (firstName == "") {
    alert('Hello \nPlease insert Your FirstName in input \n      Thanks you. 🎉')
}

// if (checkNameLength) {
//         alert('FirstName & LastName be Checked ✅')
//         if (age >= authAge) {
//             text.innerHTML += `Hello Mr./Mrs ${firstName} ${lastName}. You are ${age} Years Old Today and you can take driver's license ✅`;
//         } else {
//             text.textContent = `Your age is ${age} and Your Full name is ${firstName} ${lastName} and you can't take driver's license 🛑`;
//         }
//     } else {
//         alert('FirstName & LastName be Checked Please Enter your Name Above or Equal to 3 Characters 🛑')
//     }

//==========================================

// if (authAge <= (age)) {
//     text.textContent = `Your age is ${age} and Your Full name is ${firstName} ${lastName} and you can take driver's license ✅`;
// } else {

//     text.textContent = `Your age is ${age} and Your Full name is ${firstName} ${lastName} and you can't take driver's license 🛑`;
// } 
=======
>>>>>>> Stashed changes
