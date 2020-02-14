# Game-Project-Zero: CLOSE CALL
Inspired by the original 1996 Mission: Impossible film, challenge your film knowledge with trivia about the series. 

# Wireframe
See image of written wireframe: https://imgur.com/a/CU2p57B

# User Story
i. 
    The game opens with the famous scene from Mission Impossible

        a. https://youtu.be/ar0xLps7WSY
        b. See screenshot: assets/start.png

ii. 
    User clicks on "Your mission, should you choose to accept it" button to display game instructions.

    "Answer the questions to download more files. Get 3 WRONG, the download stops and the mission has failed. Get 4 OR MORE correct and use letters from the answers to break the password. Get all the files and complete your mission. Good luck."

        a. User clicks on the F1 button to enter the game and display the first question
        b. See screenshot: assets/game-play.png

iii. 
    User clicks on F buttons to navigate through questions and answers. There are five questions total.

iv. 
    Each correct answer allows the user to “download” more information from the computer.
        a. At least four of the five questions must be answered correctly in order for the user to move onto the password page though the 'Files Ready To Download' button.
            i. See screenshot: assets/files-ready.png
        b. Three wrong answers, the download stops and the mission has failed.
            i. See screenshot: assets/three-failed-attemps.png
v. 
    The words from the answers will be used to answer the password. The user is given a question and hint. The user must use the letters to form a word that they will enter as the “password”.
        a. See screenshot: assets/password-state.png
vi. Win/Loss states
        a. Password correct → Mission complete! 
            i. See screenshot: assets/mission-accomplished-state.png
        b. Password incorrect → Mission failed.
            i. See screenshot: assets/mission-failed.png


# Nice to haves

i. Add condition to if statement in clickAnswer function to try and eliminate 'click' on ol margin
    a. Two clicks on ordered list can affect user score

        (event.target.innerText === triviaQA[displayedQuestion].correctAnswer && event.target.elementName === "li")

ii. Add click disable function on F buttons so user cannot answer the same question again

iii. Add font awesome icon to 'download failed, try again' state (Using font awesome on DOM created elements).

        let threeWrongLink = document.createElement("i");
            threeWrongLink.setAttribute("id", "try-again");
            document.getElementById("three-wrong-div").appendChild(threeWrongLink);
            
            document.getElementById("try-again").addEventListener("click", function(){
            location.reload();
            });

        CSS or HTML: <i class="fas fa-redo"></i>

iv. Account for mobile version

v. Build out trivia questions to a larger database

vi. Noticed that html file color is more dynamic than 'deployed' version
    See screenshots: assets/deployed-color.png
                     assets/html-color.png

vii. Include scene that helps with password hint? ("Mission: Impossible (1996) - Out of the Vault Scene")
    a. https://youtu.be/2wwC9c3iYK4?t=43
    
:0)

