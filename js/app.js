//*************************** HACK THE MAINFRAME *************************** //

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
        question: "Does Ethan’s wife, Julia, die in the series?",
        answersArray: [
            "True",
            "False"
        ],
        attemptedAnswer: false,
        correctAnswer: "False"
    },

    {
        question: "The character William, played by Jeremy Renner, also stars in all of the films below except for:",
        answersArray: [
            `The King's Speech`,
            "S.W.A.T.",
            "The Bourne Legacy",
            "The Hurt Locker",
        ],
        attemptedAnswer: false,
        correctAnswer: `The King's Speech`,
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

    // userAnswers = [] rendered useless by function clickAnswer below

    userScore = 0,
    maxWrong = 0,
    //maxScore = 5,
];

// password QA
const password = {

    passwordInstructions: [`Use ONLY 5 LETTERS from the correct answers to answer the following question.`],

    passwordQuestion: [
        `In the scene shown at the beginning of the game, Ethan leaves behind something on the computer desk. 
        What did he leave?`
    ],

    passwordClues: [`Ethan Hunt, TuraNdot, False, The KIng's Speech, Protocol`],

    passwordAnswer: "knife"

};

// on F1 - F5 CLICK
let displayedQuestion = 0; // used displayedQuestion in clickAnswer function

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
        document.querySelector('ol').addEventListener('click', clickAnswer);

        let downloadBar = document.createElement("div");
            downloadBar.innerHTML = "Downloading...";
            downloadBar.setAttribute("id", "download");
            answers.appendChild(downloadBar);
};

// adds event listener for F1 - F5 buttons
document.querySelectorAll(".question").forEach(function(button) {
    button.addEventListener("click", question);
});


// click event targets li and checks innerText against triviaQA array's correctAnswer at displayedQuestion
// can console log score, mission complete and mission failed.
function clickAnswer (event) {
    if (event.target.innerText === triviaQA[displayedQuestion].correctAnswer) {
        console.log(userScore += 1);
    } else {
        console.log(maxWrong += 1);
            if (maxWrong === 3) {
        console.log(`mission failed`);
    }
        // if (userScore >= 3) {
        //     console.log(`mission complete`);

        //         // pWdiv and passwordButton propogates if userScore = 5
        //         // addEventListener

        //         //don't need separate div?
        //         // let pWdiv = document.createElement("div");
        //         //     pWdiv.setAttribute("class", "password-div");
        //         //     document.getElementById("question-answers").appendChild(pWdiv);

        //         let passwordButton = document.createElement("button");
        //             passwordButton.setAttribute("id", "password");
        //             passwordButton.innerHTML = "FILES READY TO DOWNLOAD";
        //             document.getElementById("blank-computer-screen").appendChild(passwordButton);
                
        //             document.getElementById("password").addEventListener('click', clickPassword);
        // }
}
questionsComplete();
};


// 4 right, 1 wrong = below function works!
// 3 right, 2 wrong = below function works!
// 2 right, 1 wrong, 2 right = below function works!

// 1 wrong, 4 right = below function works!
// 1 wrong, 2 right, 2 wrong = mission failed! above function works!
// 2 wrong, 3 right = below function works!
// 3 wrong, 2 right = mission failed! above function works!

function questionsComplete() {
    //let h1check = document.createElement("h1");
    //if (h1check.innerHTML === triviaQA[4].question && (userScore >= 3)) {
        //above code needs to be worked on for game logic (also clickAnswer function)
        if (((userScore >= 4) && (maxWrong >= 1)) || ((userScore >=3) && (maxWrong >= 2))) {
            console.log(`mission complete`);

        let passwordButton = document.createElement("button");
            passwordButton.setAttribute("id", "password");
            passwordButton.innerHTML = "FILES READY TO DOWNLOAD";
            document.getElementById("question-answers").appendChild(passwordButton);
        
            document.getElementById("password").addEventListener('click', clickPassword);
}
// }
};


// opens up password state
function clickPassword(event) {
    if (event.target.innerHTML === "FILES READY TO DOWNLOAD") {

        //remove download
        let removeDownload = document.getElementById('download');
            removeDownload.remove();

        //remove button (may not need if can disable f1-f5 buttons)
        let removeFilesDownloadButton = document.getElementById('password');
            removeFilesDownloadButton.remove();
        
        let passwordClue;
        let check = document.querySelector("h1");

        if (check == null) {
            passwordClue = document.createElement("h1");
            passwordClue.innerHTML = `${password.passwordInstructions}< br /> 
            < br />${password.passwordClues}< br /> 
            < br />${password.passwordQuestion}`;
            passwordClue.setAttribute("class", "password");
            document.getElementById("question-answers").appendChild(question);
        } else {
            check.remove();
            passwordClue = document.createElement("h1");
            passwordClue.innerHTML = `${password.passwordInstructions}
            ${password.passwordClues}
            ${password.passwordQuestion}`;
            passwordClue.setAttribute("class", "password");
            document.getElementById("question-answers").appendChild(passwordClue);
        }

        let passwordInput = document.createElement("input");
            passwordInput.setAttribute("type", "text");
            passwordInput.setAttribute("minlength", "5");
            passwordInput.setAttribute("maxlength", "5");
            passwordInput.setAttribute("id", "password-input");
            passwordInput.innerHTML = "5 LETTER WORD";
            //need? passwordInput.setAttribute("spellcheck", "true") 
            document.getElementById('question-answers').appendChild(passwordInput);

        let passwordInputButton = document.createElement("button");
            passwordInputButton.setAttribute("id", "pass-input-button");
            passwordInputButton.innerHTML = "Enter"
            document.getElementById('question-answers').appendChild(passwordInputButton);

            document.getElementById('question-answers').addEventListener('click', checkPasswordInput);
    }
};


function checkPasswordInput() { 
    let passwordAnswerCheck = document.getElementById('password-input').value; 
        if (password.passwordAnswer === passwordAnswerCheck.toLowerCase()) {
            console.log(`woo`);
        } else {
            console.log(`whyyyyyyyy`);
        }
};


// ***** WHERE TO PLACE THESE FUNCTIONS? ***** //

//disable button on click - where to place it
function disableButtonsOnceClicked() {
    document.getElementById("f1").disabled = true;
    document.getElementById("f2").disabled = true;
    document.getElementById("f3").disabled = true;
    document.getElementById("f4").disabled = true;
    document.getElementById("f5").disabled = true;
}

// wrote function but don't know where to put it
function removePasswordInput() {
    let removeInputField = document.getElementById('password-input');
        removeInputField.remove();
    let removeInputButton = document.getElementById('pass-input-button');
        removeInputButton.remove();
}


// // creates new div, propogates passwordInput, passwordButton and passwordInstruct and Clues
// let pWdiv = document.createElement("div");
// pWdiv.setAttribute("class", "password-div");
// document.getElementById("blank-computer-screen").appendChild(pWdiv);

// let passwordInstruct = document.createElement("h2");
// passwordInstruct.innerHTML = `ENTER a 5 LETTER password. Use LETTERS from the correct answers and the clue below.` 
// pWdiv.appendChild(passwordInstruct);

// let passwordClue = document.createElement("h3");
// passwordClue.innerHTML = `Ethan Hunt, TuraNdot, False, The KIng's Speech, Protocol`;
// pWdiv.appendChild(passwordClue);

// let passwordClueTwo = document.createElement("h3");
// passwordClueTwo.innerHTML = `At the end of the clip, what did Ethan leave behind on the desk?`
// pWdiv.appendChild(passwordClueTwo);

// let passwordInput = document.createElement("input");
// passwordInput.setAttribute("type", "text");
// passwordInput.setAttribute("minlength", "5");
// passwordInput.setAttribute("maxlength", "5");
// //passwordInput.setAttribute("spellcheck", "true") 
// pWdiv.appendChild(passwordInput);


