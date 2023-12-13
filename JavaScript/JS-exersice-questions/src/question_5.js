'use strict'

//^ #5 

// Get New Date
let getNewDate = new Date();
let currentYear = getNewDate.getFullYear();

// AuthAge
const authAge = 18;

// Get Age and BirthYear 
const getBirthYear = document.getElementById('getBirthYear')
const age = currentYear - getBirthYear;

// Place that and text complete is be Shown.
const text = document.getElementById('Text');
// Get and Store FirstName & LastName
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');


// Button Check Fuction
const btnCheckHandler = () => {
    // Input Value
    const firstNameInputValue = firstName.value;
    const lastNameInputValue = lastName.value;
    const getBirthYearInputValue = getBirthYear.value;

    // Checked Span Text
    const checkedFirstName = document.getElementById('checkedFirstName')
    const checkedLastName = document.getElementById('checkedLastName')
    const checkedGetBirthYear = document.getElementById('checkedGetBirthYear')

    // The Condition scripts
    if (firstNameInputValue !== "") {
        if (firstNameInputValue.length >= 3, firstNameInputValue.length <= 20) {
            checkedFirstName.textContent = 'FirstName be Checked ✅';
            if (lastNameInputValue.length >= 3, lastNameInputValue.length <= 20) {
                checkedLastName.textContent = 'LastName be Checked ✅';
            } else {
                checkedLastName.textContent = 'Please Insert LastName.';
            }
        } else {
            alert("First Name must be between or equal to 3 to 20 characters");
        }
    } else if (firstNameInputValue === "") {
        checkedFirstName.textContent = 'Please Insert FirstName .';
        checkedLastName.textContent = 'Please Insert LastName .';
        checkedGetBirthYear.textContent = 'Please Insert BirthYear .';
    };

    // Console scripts
    console.log(firstNameInputValue)
    console.log(lastNameInputValue)
    console.log(getBirthYearInputValue)
};

// Button Reset Fuction
const btnResetHandler = () => {
    const firstNameInputValue = firstName.value = "";
    const lastNameInputValue = lastName.value = "";
    const getBirthYearInputValue = getBirthYear.value = "";

};

// const firstName = prompt('What is your First Name ?')
// const lastName = prompt('What is your Last Name ?')
// const getBirthYear = Number(prompt('When you born ?'));
//============================================= # 1-2 #######
// const checkNameLength = (firstName.length >= 3, firstName.length <= 20, lastName.length <= 20, lastName.length >= 3)




///============================================== # 1-1 #######
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
