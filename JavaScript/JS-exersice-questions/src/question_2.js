'use strict'


//^ #2 
// 2. Write a JavaScript program to print the current window contents.  

// Function for Print method
function print_current_page() {
    window.print()
}

// Action for Button
const btn = document.querySelector('.btn')
const clickHandler = () => {
    btn.addEventListener('click', print_current_page())
}
