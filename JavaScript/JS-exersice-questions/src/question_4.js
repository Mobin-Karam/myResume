'use strict'

//^ #4
// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

//* Tip :: A = √[s(s - a)(s - b)(s - c)], where 's' is the semi - perimeter of the triangle given by s = (a + b + c) / 2.

// Calculation the area of triangle
const areaT = (a, b, c) => {
    let s = (a + b + c) / 2;
    let A = s * (s - a) * (s - b) * (s - c);
    return (A)
};

// console.log() The answer of question
console.log(Math.sqrt(areaT(5, 6, 7)))

