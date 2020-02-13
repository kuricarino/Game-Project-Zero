# Game-Project-Zero

Wireframe: https://imgur.com/a/CU2p57B

User Story
i. 
    The game opens with the famous scene from Mission Impossible
        a. https://youtu.be/ar0xLps7WSY
ii. 
    Your mission, should you choose to accept it, is to hack the computer and download the information. Answer all five questions correct, use your answers to break the password. Miss three, the computer will self destruct and the mission has failed. 
    a.User clicks on the start button to enter the game
iii. 
    User clicks on text boxes to answer five questions regarding film trivia
iv. 
    Each correct answer allows the user to “download” more information from the computer
        a. Three wrong answers and the computer “self destructs”
v. 
    The words from the answers will be used to answer the password. User takes letters and forms a word that they will enter as the “password”
vi. Password correct → Download complete. 
vii. Mission complete!



(event.target.innerText === triviaQA[displayedQuestion].correctAnswer && event.target.elementName === "li")

event.target.style.background = "lightgrey";
event.target.style.cursor = 'not-allowed';

let threeWrongLink = document.createElement("a");
            threeWrongLink.innerHTML = "try again?";
            //threeWrongLink.setAttribute("id", "try-again");
            document.getElementById("three-wrong-div").appendChild(threeWrongLink);
            
            // document.getElementById("try-again").addEventListener("click", function(){
            //     location.reload();
            // });