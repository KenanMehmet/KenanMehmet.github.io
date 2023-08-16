let acc = document.getElementsByClassName("project-container");
let content = document.getElementById("accordion-content")
let i;

const spaceBall = [
    'SpaceBall',
    'Javascript',
    'Spaceball is a full simulation of a game of baseball using entirely javascript.',
    'Spaceball-field.png'
];

const chessMate = [
    'ChessMate',
    'Python, Django, Javascript',
    'ChessMate came from a love of chess, statistics and wanting to improve my web app development skills. Django is used to host the website and webpages, while javascript is used to run games of chess',
    'chess-mate.png'
]

const fitnessWebsite = [
    'Fitness website',
    'React, Javascript, Rapid API',
    'From a recent found hobby of fitness, I have went onto to make a react based project to help me explore the worlod of fitness. This react project is structured by using multiple components to be reused between pages, querying an API to get all data of exercises and present them for the user to look through.',
    'fitness-club.png'
]
console.log(content)
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
} 