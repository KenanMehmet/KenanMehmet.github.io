let acc = document.getElementsByClassName("project-container");
let content = document.getElementById("accordion-content")

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
const insuranceMicroservice = [
    'Insurance Microservice',
    'Python, Flask, Selenium, RabbitMQ',
    'This microservice is a bespoke automated system to insure the compnays users. It uses RabbitMQ to listen to our main web app and record any time a new user triggers an event that will require them to be insured, it will then send over all the needed data and store it in a mongoDB table to be used later. At the beginning of every day it will run through every uninsured user in its database and then run the selenium script to run through the entire website process, once a claim has been made it then records the claim number into a claims table to be used for later. At the end of every month we will then check which users need to be uninsured, then we will run a selenium script to cancel all claims.',
    ''
]
const accordionContent = [spaceBall, chessMate, fitnessWebsite, insuranceMicroservice]
// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", triggerAccordion());
// }

function triggerAccordion(element) {
    //fade(content)
    element.classList.toggle("active");
    let change = accordionContent[element.dataset.value]

    /* Toggle between hiding and showing the active panel */
    console.log(content)
    console.log(content.children[0])
    if (
        content.children[0].innerHTML === change[0] &&
        content.style.display == "block"
    ) {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    for (let i = 0; i < change.length - 1; i++) {
        content.children[i].innerHTML = change[i]
    }
    content.children[3].src = change[3]
    unfade(content)
}

function ajaxForm() {
    var x = document.getElementById("contact-form");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        console.log(i)
        console.log(x.elements[i].value)
        text += x.elements[i].value + "<br>";
    }
    fetch("https://formsubmit.co/ajax/kenmehmet1@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: x.elements[0].value,
            email: x.elements[1].value,
            subject: x.elements[2].value + " " + x.elements[3].value,
            message: x.elements[4].value,
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}