"use strict"

/*
       Personal Portfolio Website javascript Page
       Auther: Carl Provost
       Date Created: 3/28/2024
       last Updated: 4/25/2024
       Filename: button_script.js
*/

/* Hamburger and X buttons opening and closeing nav links */
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the hamburger button, close button, and navigation list
    let hamButton = document.getElementById("ham");
    let closeButton = document.getElementById("close");
    let navList = document.querySelector("nav .links ul");

    // Check if all necessary elements are found in the DOM
    if (hamButton && closeButton && navList) {
        // Add event listener to the hamburger button
        hamButton.addEventListener("click", function () {
            // Display the navigation menu
            navList.style.display = "flex";
            // Hide the hamburger button
            hamButton.style.display = "none";
            // Show the close button
            closeButton.style.display = "block";

            document.querySelector(".nav").style.flexDirection = "column";
        });

        // Add event listener to the close button
        closeButton.addEventListener("click", function () {
            // Hide the navigation menu
            navList.style.display = "none";
            // Show the hamburger button
            hamButton.style.display = "block";
            // Hide the close button
            closeButton.style.display = "none";

            document.querySelector(".nav").style.flexDirection = "row";

        });
    }
});
