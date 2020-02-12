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
