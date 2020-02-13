// ***** PRACTICE & DEPRECATED CODE ***** //

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

//even if create video in dom, remove gets error in question event function
document.querySelectorAll(".question").forEach(function(button) {
    button.addEventListener("click", question);
});

let video = document.createElement("iframe");
        video.setAttribute("width", "640");
        video.setAttribute("id", "video");
        video.setAttribute("heigh", "480");
        video.setAttribute("src", "https://www.youtube.com/embed/ar0xLps7WSY?end=24");
        document.getElementById('video-div').appendChild(video);


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

<iframe id= "video" width="640" height="480" src="https://www.youtube.com/embed/ar0xLps7WSY?end=24" frameborder="0" allowfullscreen></iframe>


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

let allAnswerChoices = [ //array of arrays

// first question multiple choice 
    [
    "Ethan Hawke",
    "James Hunt",
    "Ethan Hunt",
    "Ethan Allen"
    ],

// second question multiple choice
    [
        "Madame Butterfly",
        "Turandot",
        "Porgy & Bess",
        "Carmen"
    ],

// third question true or false
    [
    "True",
    "False"
    ],

// fourth quesiton multiple choice
    [
    "The Bourne Legacy",
    "The Knockout",
    "S.W.A.T.",
    "The Hurt Locker",
    ],

// fifth and last question fill in the blank
    [
    "Recon",
    "Nation",
    "Renegade",
    "Protocol"
    ]

]

let correctAnswers = //array
[   // answer to question 1
    "Ethan Hunt",
    // answer to quesiton 2
    "Turandot",
    // answer to question 3
    "False",
    // answer to question 4
    "The Knockout",
    // answer to question 5
    "Protocol"
]






// CODE ON WED //
//*************************** HACK THE MAINFRAME *************************** //

console.log(`hack the mainframe`);

// ***** THINGS TO CONSIDER ***** //
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
        question: `Fill in the blank. 
        Mission Impossible: Ghost __________.`,

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

    //gameInstructions = "Answer the questions to download more files. If you get three wrong, download stops and the mission fails. Get 4 or more correct and you move on to the password page. Input the correct password to get all the files and complete your mission. Good luck."
];

// password QA
const password = {

    passwordInstructions: [`Answer the following question, using only 5 letters from the words below.`],

    passwordQuestion: [
        `In the scene shown at the beginning of the game, Ethan leaves behind something on the computer desk. 
        What did he leave?`
    ],

    passwordClues: [`hint: eTHAN HUNT, TURAnDOT, fALSE, THE kiNG'S SPEECH, PROTOCOL`],

    passwordAnswer: "knife"

};

// addEventListener to start button and removes video
document.getElementById("start-button").addEventListener("click", video);

function video() {
    let removeVideo = document.getElementById('video-div');
        removeVideo.remove();
    
    let gameInstructions = document.createElement("p");
        gameInstructions.innerHTML = "Answer the questions to download more files."
        + "<br />" + "Get 3 WRONG, the download stops and the mission has failed." 
        + "<br />" + "Get 4 OR MORE correct and you move on to the password page." 
        + "<br />" + "Input the correct password to get all the files and complete your mission." 
        + "<br />" + "Good luck.";
        document.getElementById("start").appendChild(gameInstructions);
}

// on F1 - F5 CLICK, corresponding question displayed
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
            document.getElementById("qa").appendChild(question);
        } else {
            check.remove();
            question = document.createElement("h1");
            question.innerHTML = triviaQA[displayedQuestion].question;
            document.getElementById("qa").appendChild(question);
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
            downloadBar.setAttribute("class", "blinking");
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
        console.log(`user exceeded max wrong`);

        // removes other elements from 'screen'
        document.getElementById('download').remove();
        document.getElementById('qa').remove();

        // adds try again gif
        let threeWrong = document.createElement("img");
            threeWrong.setAttribute("src", "https://media0.giphy.com/media/MrCYIN3x0SgdG/giphy.gif");
            threeWrong.setAttribute("id", "img");
            document.getElementById("three-wrong-div").appendChild(threeWrong);
        
        // anchor tag that lets user redirect (may need to change href?)
        let threeWrongAnchor = document.createElement("a");
            threeWrongAnchor.innerHTML = "you failed. try again?";
            threeWrongAnchor.setAttribute("href", "file:///Users/kuri.carino/sei/projects/Game-Project-Zero/index.html")
            document.getElementById("three-wrong-div").appendChild(threeWrongAnchor);
    }
}
questionsComplete();
};

// ANSWERS TEST
// 4 right, 1 wrong = below function works!
// 3 right, 2 wrong = below function works!
// 2 right, 1 wrong, 2 right = below function works!

// 1 wrong, 4 right = below function works!
// 1 wrong, 2 right, 2 wrong = mission failed! above function works!
// 2 wrong, 3 right = below function works!
// 3 wrong, 2 right = mission failed! above function works!

function questionsComplete() {
        if (((userScore >= 4) && (maxWrong >= 1)) || ((userScore >=3) && (maxWrong >= 2)) || (userScore === 5)) {
            console.log(`'files ready to download' buttons populates. user moves to password state`);

        let passwordButton = document.createElement("button");
            passwordButton.setAttribute("id", "password");
            passwordButton.innerHTML = "FILES READY TO DOWNLOAD";
            document.getElementById("blank-computer-screen").appendChild(passwordButton);
        
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
        
        let passwordh1;
        let passwordQuestion;
        let passwordClue;
        let check = document.querySelector("h1");

        if (check == null) {
            passwordh1 = document.createElement("h1");
            passwordh1.setAttribute("id", "password");
            passwordh1.innerHTML = `${password.passwordInstructions}`
            document.getElementById("password-state").appendChild(passwordh1);

            passwordQuestion = document.createElement("h1");
            passwordQuestion.setAttribute("id", "password");
            passwordQuestion.innerHTML = `${password.passwordQuestion}`;
            document.getElementById("password-state").appendChild(passwordQuestion);

            passwordClue = document.createElement("h3");
            passwordClue.setAttribute("id", "password");
            passwordClue.innerHTML =`${password.passwordClues}`
            document.getElementById("password-state").appendChild(passwordClue);

        } else {
            check.remove();

            passwordh1 = document.createElement("h1");
            passwordh1.setAttribute("id", "password");
            passwordh1.innerHTML = `${password.passwordInstructions}`
            document.getElementById("password-state").appendChild(passwordh1);

            passwordQuestion = document.createElement("h1");
            passwordQuestion.setAttribute("id", "password");
            passwordQuestion.innerHTML = `${password.passwordQuestion}`;
            document.getElementById("password-state").appendChild(passwordQuestion);

            passwordClue = document.createElement("h3");
            passwordClue.setAttribute("id", "password");
            passwordClue.innerHTML =`${password.passwordClues}`
            document.getElementById("password-state").appendChild(passwordClue);
        }

        // password input box
        let passwordInput = document.createElement("input");
            passwordInput.setAttribute("type", "text");
            passwordInput.setAttribute("minlength", "5");
            passwordInput.setAttribute("maxlength", "5");
            passwordInput.setAttribute("id", "password-input");
            //passwordInput.innerHTML = "5 LETTER WORD"; doesn't work
            //need? passwordInput.setAttribute("spellcheck", "true") 
            document.getElementById('password-state').appendChild(passwordInput);

        // password ENTER button
        let passwordInputButton = document.createElement("button");
            passwordInputButton.setAttribute("id", "pass-input-button");
            passwordInputButton.innerHTML = "Enter"
            document.getElementById('password-state').appendChild(passwordInputButton);
    }
            document.getElementById("pass-input-button").addEventListener('click', checkPasswordInput);
};

// checks users input for password prompt
function checkPasswordInput() { 
    let passwordAnswerCheck = document.getElementById('password-input').value;

    let missionStatusDiv = document.createElement("div");
        missionStatusDiv.setAttribute("id", "mission-state");
        document.getElementById("blank-computer-screen").appendChild(missionStatusDiv);
    
        if (password.passwordAnswer === passwordAnswerCheck.toLowerCase()) {

                document.getElementById("password-state").remove();

            console.log(`---MISSION COMPLETE!---`);

            let missionCompleteMessage = document.createElement("h1");
                missionCompleteMessage.innerHTML = "MISSION COMPLETE"
                document.getElementById("mission-state").appendChild(missionCompleteMessage);

            let missionComplete = document.createElement("img");
                missionComplete.setAttribute("src", "https://filmschoolrejects.com/wp-content/uploads/2018/08/Mission-Impossible-Bombs.gif");
                missionComplete.setAttribute("id", "img")
                document.getElementById("mission-state").appendChild(missionComplete);

        } else {

            document.getElementById("password-state").remove();

            console.log(`---mission failed---`);

            let missionFailedMessage = document.createElement("h1");
                missionFailedMessage.innerHTML = "MISSION FAILED"
                document.getElementById("mission-state").appendChild(missionFailedMessage);


            let missionFailed = document.createElement("img");
                missionFailed.setAttribute("src", "https://media1.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
                missionFailed.setAttribute("id", "img")
                document.getElementById("mission-state").appendChild(missionFailed);

        }
};


// ******* WHERE TO PLACE THESE FUNCTIONS? ******* //

//disable button on click - where to place it
function disableButtonsOnceClicked() {
    document.getElementById("f1").disabled = true;
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


