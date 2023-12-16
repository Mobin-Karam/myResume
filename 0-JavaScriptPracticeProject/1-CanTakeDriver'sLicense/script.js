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

// ---- Place that and text complete is be Shown.
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

    const age = currentYear - getBirthYearInputValue;

    // - The Condition scripts

    // if for FirstName if empty or not
    if (firstNameInputValue !== "") {

        // if for FirstName is above 3 to 20
        if (firstNameInputValue.length >= 3 && firstNameInputValue.length <= 20) {

            checkedFirstName.textContent = '';

            // if for lastName if above 3 to 20
            if (lastNameInputValue.length >= 3 && lastNameInputValue.length <= 20) {

                checkedLastName.textContent = '';

                // if for getBirthYear is above 1950
                if (getBirthYearInputValue >= 1950 && getBirthYearInputValue <= currentYear) {

                    // if Age equal or above AuthAge for Driver's license.
                    if (age >= authAge) {
                        text.textContent = `Your Name Is ${firstNameInputValue} ${lastNameInputValue}. You Were Born In ${getBirthYearInputValue} and your age is ${age},
                        and you are allowed to take driver's license ✅`;

                        // checked Get BirthYear be empty
                        checkedGetBirthYear.textContent = '';
                    } else {
                        text.textContent = `Your are not Allowed 🛑`
                    }
                } else {
                    checkedGetBirthYear.textContent = `Please Insert Correct BirthYear should be between ${currentYear} and 1950 .`;
                }
            } else {
                checkedLastName.textContent = 'Please Insert LastName .';
                checkedGetBirthYear.textContent = 'Please Insert BirthYear .';
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
    text.textContent = "";

};



window.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        return btnCheckHandler();
        // return alert('Hello')
    }
});
