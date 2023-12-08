'use strict'

//^ #1 Question
//* About Date and Time

//* stampTime 01 Jan 1970
// const newDate = new Date(2*365*24*3600*1000);
// let date = document.querySelector('.date');

//* Date before 01.01.1970 have negative timestamp 

// date.textContent = `${newDate}`

// console.log(newDate)
// console.log(date)

//! The Answer 

// Fix Data & Time Show on Screen
const newDate = new Date();
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const daysOfWeek = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
]

date.textContent = ` ${newDate.getFullYear()}.${newDate.getMonth()}.${newDate.getDate()} `
time.textContent = ` ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()} | ${daysOfWeek[newDate.getDay()]} `

// Make time refresh in every Seconds
let timer = () => {
    // Get newDate Every time
    const newDate = new Date();
    let hours = newDate.getHours()
    let minutes = newDate.getMinutes()
    let seconds = newDate.getSeconds()
    let daysOfWeeks = daysOfWeek[newDate.getDay()]
    // Set AM & PM 
    let am_pm = hours >= 12 ? 'PM' : 'AM'
    // For Zero beside along Numbers
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    if (hours < 10){
        hours = `0${hours}`
    }
    if (minutes < 10){
        minutes = `0${minutes}`
    }
    // Set QuerySeletor
    let time = document.querySelector('.time');
    // Set time Layout
    time.textContent = ` ${hours}:${minutes}:${seconds} | ${am_pm} | ${daysOfWeeks} `
    // Show in Console.log()
    // console.log(time)
    // console.log(newDate)
}


setInterval(timer, 1000);

console.log(date)
console.log(daysOfWeek[newDate.getDay()])


//^ #2 



