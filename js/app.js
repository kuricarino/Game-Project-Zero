function startGame() {
    console.log(`start game`);
};

// ***** THINGS TO CONSIDER ***** //
// divide questions and answers into objects?

// ***** THINGS TO DO ***** //

// questions and answers object
const triviaQA = [

    questionOne= {
        question: "What is the name of Tom Cruise’s character in the Mission Impossible film series?",
        answersArray: [
            "Ethan Hawke",
            "James Hunt",
            "Ethan Hunt",
            "Ethan Allen"
            ],
        correctAnswer: "Ethan Hunt",
    },

    questionTwo= {
        question: "What opera was featured in the 2015 Mission Impossible film?",
        answersArray: [
            "Madame Butterfly",
            "Turandot",
            "Porgy & Bess",
            "Carmen"
        ],
        correctAnswer: "Turandot",
    },

    questionThree= {
        question: "Does Ethan’s wife die in the series?",
        answersArray: [
            "True",
            "False"
        ],
        correctAnswer: "False"
    },

    questionFour= {
        question: "The character William Brandt, played by Jeremy Renner, also stars in all of the films below except for:",
        answersArray: [
            "The Bourne Legacy",
            "The Knockout",
            "S.W.A.T.",
            "The Hurt Locker",
        ],
        correctAnswer: "The Knockout",
    },

    questionFive= {
        question: "Fill in the blank. Mission Impossible: Ghost __________.",
        answersArray: 
        [
            "Recon",
            "Nation",
            "Renegade",
            "Protocol"
        ],
        correctAnswer: "Protocol"
    }
];

// password QA
const passwordObject = {

    passwordQuestion: [
        "In the scene shown at the beginning of the game, Ethan leaves behind something on the computer desk. What did he leave? Using letters from the correct answers above, enter the password below."
    ],

    passwordAnswer: ["knife"]
};

// ***** FUNCTIONS ***** //

let securityQuestions = //array
[   // question 1
    "What is the name of Tom Cruise’s character in the Mission Impossible film series?",
    // question 2
    "What opera was featured in the 2015 Mission Impossible film?",
    // question 3
    "Does Ethan’s wife die in the series?",
    // question 4
    "The character William Brandt, played by Jeremy Renner, also stars in all of the films below except for:",
    // question 5 
    "Fill in the blank. Mission Impossible: Ghost __________."
]

// on F1 CLICK

let displayedQuestion = 0;


function displayQuestion(event) {
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
    console.log("HERE")
    let question;
        let check = document.querySelector("h1");

        if (check == null) {
            question = document.createElement("h1");
            console.log(triviaQA[0])
            question.innerHTML = triviaQA[displayedQuestion].question;
            //questionOne.setAttribute("class", "question");
            document.getElementById("questions").appendChild(question);
        } else {
            check.remove();
            question = document.createElement("h1");
            question.innerHTML = triviaQA[displayedQuestion].question;
            //questionOne.setAttribute("class", "question");
            document.getElementById("questions").appendChild(question);
        }

        let answers;
            answers = document.createElement("ol");
    
            for (let i = 0; i < triviaQA[displayedQuestion].answersArray.length; i++) {
            let answersList = document.createElement("li");
                answersList.innerHTML = triviaQA[displayedQuestion].answersArray[i];
                answers.setAttribute("class", "answer");
                answers.appendChild(answersList);
            }
        
        question.appendChild(answers);
        
};

//

// function displayAnswersOne() {
//     let answersOne;
//         answersOne = document.createElement("ul");
    
//     for (let i = 0; i < triviaQA.questionOne.answersArray.length; i++) {
//     let answersOneList = document.createElement("li");
//         answersOneList.innerHTML = triviaQA.questionOne.answersArray;
//         answersOne.appendChild(answersOneList);
//     }
// };


/* this in to setQuestions ////questions.setAttribute("class", "hidden");
let numQuestion = 0;
function displayQuestion() {
    questions = document.querySelectorAll("h1");
    questions[numQuestion].classList.remove("hidden");
    numQuestion++
}
*/

// for loop to write one question

// put that function inside of another function that loops 5 times?

document.querySelectorAll(".question").forEach(function(button) {
    button.addEventListener("click",displayQuestion)
});