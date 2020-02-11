function startGame() {
    console.log(`start game`);
};

// ***** THINGS TO CONSIDER ***** //
// divide questions and answers into objects?
// download bar
// typewriter effect?

// ***** THINGS TO DO ***** //

// questions and answers object
const triviaQA = [

    {
        question: "What is the name of Tom Cruise’s character in the Mission Impossible film series?",
        answersArray: [
            "Ethan Hawke",
            "James Hunt",
            "Ethan Hunt",
            "Ethan Allen"
        ],
        attemptedAnswer: false,
        correctAnswer: "Ethan Hunt",
    },

    {
        question: "What opera was featured in the 2015 Mission Impossible film?",
        answersArray: [
            "Madame Butterfly",
            "Turandot",
            "Porgy & Bess",
            "Carmen"
        ],
        attemptedAnswer: false,
        correctAnswer: "Turandot",
    },

    {
        question: "Does Ethan’s wife die in the series?",
        answersArray: [
            "True",
            "False"
        ],
        attemptedAnswer: false,
        correctAnswer: "False"
    },

    {
        question: "The character William Brandt, played by Jeremy Renner, also stars in all of the films below except for:",
        answersArray: [
            "The Bourne Legacy",
            "The Knockout",
            "S.W.A.T.",
            "The Hurt Locker",
        ],
        attemptedAnswer: false,
        correctAnswer: "The Knockout",
    },

    {
        question: "Fill in the blank. Mission Impossible: Ghost __________.",
        answersArray: 
        [
            "Recon",
            "Nation",
            "Renegade",
            "Protocol"
        ],
        attemptedAnswer: false,
        correctAnswer: "Protocol"
    },

    userAnswers = [
        //empty array
    ],

    userScore = 0,
];

// password QA
const passwordObject = {

    passwordQuestion: [
        "In the scene shown at the beginning of the game, Ethan leaves behind something on the computer desk. What did he leave? Using letters from the correct answers above, enter the password below."
    ],

    passwordAnswer: ["knife"]
};

// ***** FUNCTIONS ***** //

// on F1 - F5 CLICK

let displayedQuestion = 0;

function question(event) {
    if (event.target.innerHTML === "F1") {
        displayedQuestion = 0;
    } else if (event.target.innerHTML === "F2") {
        displayedQuestion = 1;
    } else if (event.target.innerHTML === "F3") {
        displayedQuestion = 2;
    } else if (event.target.innerHTML === "F4") {
        displayedQuestion = 3;
    } else if (event.target.innerHTML === "F5") {
        displayedQuestion = 4;
    }

    let question;
        let check = document.querySelector("h1");

        if (check == null) {
            question = document.createElement("h1");
            question.innerHTML = triviaQA[displayedQuestion].question;
            //questionOne.setAttribute("class", "question");
            document.getElementById("question-answers").appendChild(question);
        } else {
            check.remove();
            question = document.createElement("h1");
            question.innerHTML = triviaQA[displayedQuestion].question;
            //questionOne.setAttribute("class", "question");
            document.getElementById("question-answers").appendChild(question);
        }

        let answers;
            answers = document.createElement("ol");
    
            for (let i = 0; i < triviaQA[displayedQuestion].answersArray.length; i++) {
            let answersList = document.createElement("li");
                answersList.innerHTML = triviaQA[displayedQuestion].answersArray[i];
                answersList.setAttribute("class", "answer");
                answers.appendChild(answersList);   
            }
        
        question.appendChild(answers);
        
};


// add event listener for F1 - F5 buttons
document.querySelectorAll(".question").forEach(function(button) {
    button.addEventListener("click", question)
});


// add event listener for user click on answer list
let targetElement;

function addCustomEventListener (selector, event, handler) {
let rootElement = document.querySelector("#question-answers");
    rootElement.addEventListener(event, function(evt){
        targetElement = evt.target
        //let selector = 'li';
        while (targetElement != null) {
            if (targetElement.matches(selector)) {
                handler(evt);
                userAnswers.push(targetElement.innerText);
                return;
            }
            targetElement = targetElement.parentElement;
        }
    }, true
    );

}

addCustomEventListener('li.answer', 'click', taskClickHandler);


// function that checks correct answers

function taskClickHandler() {
    if (targetElement.innerText = "Ethan Hunt") {
        userScore += 1;
        console.log(userScore);
    } else {
        console.log(`wrong answer`);
    }
};

// }
// if (userAnswers.includes('Ethan Hunt')) {
//     userScore += 1;
//     console.log(userScore);
// }
// function that checks correct answers
// function userAnswersCheck () {
//     if (userAnswers.includes("Ethan Hunt")) {
//         console.log(`true`);
//     }
//     // } else if (event.target.innerHTML === "F2") {
//     //     displayedQuestion = 1;
//     // } else if (event.target.innerHTML === "F3") {
//     //     displayedQuestion = 2;
//     // } else if (event.target.innerHTML === "F4") {
//     //     displayedQuestion = 3;
//     // } else if (event.target.innerHTML === "F5") {
//     //     displayedQuestion = 4;
//    // }
// };

// in object create one for wrong answers
    // check if it equals 3 
    // gif of fire

//userAnswersCheck();