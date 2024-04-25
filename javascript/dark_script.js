"use strict"

/*
       Personal Portfolio Website javascript Page
       Auther: Carl Provost
       Date Created: 3/28/2024
       last Updated: 4/25/2024
       Filename: dark_script.js
*/

// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Select the dark mode toggle button and the body element
    const darkModeToggle = document.querySelector('.dark button');
    const body = document.body;

    // Function to toggle dark mode when button is clicked
    darkModeToggle.addEventListener('click', function () {
        // Toggle the 'dark-mode' class on the body element
        body.classList.toggle('dark-mode');

        // Determine the current mode ('Light Mode' or 'Dark Mode')
        const currentMode = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';

        // Update the button text to reflect the current mode
        darkModeToggle.innerText = currentMode;

        // Update button colors based on the current mode
        if (body.classList.contains('dark-mode')) {
            // Dark Mode: Set button background to Gold and text to Black
            darkModeToggle.style.backgroundColor = '#FFD700';
            darkModeToggle.style.color = '#000000';
        } else {
            // Light Mode: Set button background to Navy Blue and text to White
            darkModeToggle.style.backgroundColor = '#000080';
            darkModeToggle.style.color = '#FFFFFF';
        }
    });

    // Set initial button colors based on the initial mode (light/dark)
    if (body.classList.contains('dark-mode')) {
        // Dark Mode initial colors: Gold background, Black text
        darkModeToggle.style.backgroundColor = '#FFD700';
        darkModeToggle.style.color = '#000000';
    } else {
        // Light Mode initial colors: Navy Blue background, White text
        darkModeToggle.style.backgroundColor = '#000080';
        darkModeToggle.style.color = '#FFFFFF';
    }
});
