'use strict'

// ===============================
//^ #3 
// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// Get current date
const newDate = new Date();

// Get Year
let year = newDate.getFullYear();

// Get month (adding 1 because months are zero-based)
let month = newDate.getMonth() + 1;

// Get day of month
let date = newDate.getDate();

// show date in date div with ID
document.getElementById('date').textContent = `${month}-${date}-${year} | ${month}/${date}/${year} | ${date}-${month}-${year} | ${date}/${month}/${year} `

// console.log for test variable
console.log(month)
