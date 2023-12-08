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
    // Set QuerySeletor
    let time = document.querySelector('.time');
    // Set time Layout
    time.textContent = ` ${hours}:${minutes}:${seconds} | ${daysOfWeeks} `
    // Show in Console.log()
    // console.log(time)
    // console.log(newDate)
}



setInterval(timer, 1000);


// let timerId = setTimeout(function tick() {
//     const newDate = new Date()
//     document.querySelector('.seconds').textContent = `${newDate.getSeconds}`
//     timerId = setTimeout(tick, 1000); // (*)
// }, 1000);

// let timer = function () {
// const time = document.querySelector('.time')
//     return (
//         time.textContent = ` ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()} | ${dayOfWeek[newDate.getDay()]} `
//     )
// }

// setInterval(() => {
//     timer()
// }, 1000);

console.log(date)
console.log(daysOfWeek[newDate.getDay()])




// setTimeout(function () { window.location.reload(); }, 1000);
// let timerId = setInterval(() => window.location.reload(), 1000);

// function sayHi() {
//     alert('Hi Mobin')
// }

// setTimeout(sayHi,3000)

// function sayHi(pharse, who) {
//     return alert(pharse + ', ' + who)
// }

// let timerId = setTimeout((pharse, who) => { alert(pharse + ', ' + who) }, 2000, 'Hello', 'Mobin')

// clearTimeout(timerId);

// alert(timerId + ' Done!')


// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

//^ #2 



