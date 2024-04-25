"use strict";

/*
       Personal Portfolio Website javascript Page
       Auther: Carl Provost
       Date Created: 3/28/2024
       last Updated: 4/25/2024
       Filename: project_script.js
*/

// Object containing project details
// const projects = {
//     project1: {
//         name: "Project 1 - Big Metros",
//         description: "My first website (school project) showcasing big city metro systems.",
//         githubLink: "https://joepro001.github.io/the-big-metros/"
//     },
//     project2: {
//         name: "Project 2 - ElectronicBytes",
//         description: "My second website (school project) featuring an e-commerce store for electronic components.",
//         githubLink: "https://joepro001.github.io/ElectronicBytes-E-Store/"
//     },
//     project3: {
//         name: "Project 3 - Student Dashboard",
//         description: "My third website (school project) for tracking student progress and assignments.",
//         githubLink: "https://joepro001.github.io/Student-Dashboard/"
//     }
// };

// // Function to display project details based on projectName
// function showProject(projectName, event) {
//     event.preventDefault(); // Prevent the default anchor click behavior (navigation)

//     const project = projects[projectName]; // Retrieve project data based on projectName

//     if (project) {
//         // Construct HTML content for project details
//         const projectContent = `
//             <h3>${project.name}</h3>
//             <p>${project.description}</p>
//             <p>GitHub Repository: <a href="${project.githubLink}" target="_blank">${project.name} GitHub</a></p>
//         `;

//         // Update the showcasing div in the main section with the projectContent
//         const showcasingDiv = document.querySelector('.showcasing');
//         showcasingDiv.innerHTML = projectContent;
//     } else {
//         // Display message if project details are not found
//         const showcasingDiv = document.querySelector('.showcasing');
//         showcasingDiv.innerHTML = '<p>Project details not found.</p>';
//     }
// }




const projectButtons = document.querySelectorAll(".projectLinks button");
const websiteDetails = document.querySelectorAll(".website-details")

projectButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let id = e.target.id;
   
        websiteDetails.forEach(website => {
            website.style.display = "none";
        })
        
        websiteDetails.forEach(website => {
            if(website.ariaLabel == id) {
                website.style.display = "block";
            }
        })
    })
})