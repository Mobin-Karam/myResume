'use strict'

//^ #5 



// Define a function named animate_string that takes an id as a parameter
const animate_string = (id) => {
    // Get the element with the specified id
    const element = document.getElementById(id);

    // Get the text node from the first child of the element
    const textNode = element.childNodes[0]; // assuming no other children

    // Get the initial text from the text node
    let text = textNode.data;

    // Use setInterval to animate the string every 100 milliseconds
    setInterval(() => {
        // Shift the last character to the front of the text
        text = text[text.length - 1] + text.substring(0, text.length - 1);

        // Update the text node with the new text
        textNode.data = text;
    }, 100);
};

// Call the function with a sample id
animate_string('text'); 