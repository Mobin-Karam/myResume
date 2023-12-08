'use strict'

//^ #1 Question
//* About Date and Time

//* stampTime 01 Jan 1970

//* Date before 01.01.1970 have negative timestamp 

//! The Answer 

// Main Date & Time
const newDate = new Date();

// The Months & Day Of Week
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

// Get Date
let year = newDate.getFullYear();
let month = newDate.getMonth() + 1;
let date = newDate.getDate();
let day = newDate.getDay();

// For Zero Beside alone Numbers in Date
if (month < 10) {
    month = `0${month}`
}
if (date < 10) {
    date = `0${date}`
}

// insert date in div
const dates = document.querySelector('.date').textContent = `${year}/${month}/${date} | ${months[month - 1]}`;


// Get Time
let hours = newDate.getHours();
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();
let am_pm = hours >= 12 ? "PM" : "AM";

// insert time in div
let time = document.querySelector('.time').textContent = `${hours}:${minutes}:${seconds} | ${am_pm} | ${daysOfWeek[day - 1]}`;

// Refresh in every second for should seconds
setInterval(() => {
    const newDate = new Date();

    // Get new Time
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let am_pm = hours >= 12 ? "PM" : "AM";

    // For Zero Beside alone Numbers in Time
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    // insert time in div and refresh every second
    let time = document.querySelector('.time').textContent = `${hours}:${minutes}:${seconds} | ${am_pm} | ${daysOfWeek[day - 1]}`;

}, 1000);















// // Fix Data & Time Show on Screen
// const newDate = new Date();
// const date = document.querySelector('.date');
// const time = document.querySelector('.time');
// const daysOfWeek = [
//     "Saturday",
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wendsday",
//     "Thursday",
//     "Friday",
// ]

// date.textContent = ` ${newDate.getFullYear()}.${newDate.getMonth()}.${newDate.getDate()} `
// time.textContent = ` ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()} | ${daysOfWeek[newDate.getDay()]} `

// // Make time refresh in every Seconds
// let timer = () => {
//     // Get newDate Every time
//     const newDate = new Date();
//     let hours = newDate.getHours()
//     let minutes = newDate.getMinutes()
//     let seconds = newDate.getSeconds()
//     let daysOfWeeks = daysOfWeek[newDate.getDay()]
//     // Set AM & PM
//     let am_pm = hours >= 12 ? 'PM' : 'AM'
//     // For Zero beside along Numbers
//     if (seconds < 10) {
//         seconds = `0${seconds}`
//     }
//     if (hours < 10){
//         hours = `0${hours}`
//     }
//     if (minutes < 10){
//         minutes = `0${minutes}`
//     }
//     // Set QuerySeletor
//     let time = document.querySelector('.time');
//     // Set time Layout
//     time.textContent = ` ${hours}:${minutes}:${seconds} | ${am_pm} | ${daysOfWeeks} `
//     // Show in Console.log()
//     // console.log(time)
//     // console.log(newDate)
// }


// setInterval(timer, 1000);

// console.log(date)
// console.log(daysOfWeek[newDate.getDay()])


//^ #2 



