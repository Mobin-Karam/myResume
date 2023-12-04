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


const newDate = new Date();
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const dayOfWeek = {
    0: "Saturday",
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wendsday",
    5: "Thursday",
    6: "Friday",
}

date.textContent = ` ${newDate.getFullYear()}.${newDate.getMonth()}.${newDate.getDate()} `
time.textContent = ` ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()} | ${dayOfWeek[newDate.getDay()]} `

// console.log(date)
// console.log(dayOfWeek[newDate.getDay()])





//^ #2 



