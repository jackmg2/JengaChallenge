var currentChallengeIndex = 0;


//Set buttons behaviors
document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('game-container').style.display = 'none';
    displayText();
});

document.getElementById("restart-button").addEventListener("click", function () {
    currentChallengeIndex = 0;
    var restartContainer = document.getElementById("restart-container");
    restartContainer.style.display = "none";
    displayText();
});


function displayText() {
    var textElement = document.getElementById("text");
    textElement.style.display = "block";
    var bodyElement = document.body;
    var restartContainer = document.getElementById("restart-container");

    //If we are at the end of the game, we display the restart button
    if (currentChallengeIndex >= challenges.length) {
        textElement.style.display = "none";
        restartContainer.style.display = "block";
        return;
    }

    var currentChallenge = challenges[currentChallengeIndex];

    textElement.innerHTML = currentChallenge.text;

    //Change background color
    var randomColor = getRandomColor();
    bodyElement.style.backgroundColor = randomColor;

    speakText(currentChallenge.text);

    //Change text after duration
    setTimeout(function () {
        currentChallengeIndex++;
        displayText();
    }, currentChallenge.duration * 1000);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        var speech = new SpeechSynthesisUtterance();

        speech.lang = lang;
        speech.text = text;
        speech.rate = 1.4;

        window.speechSynthesis.speak(speech);
    } else {
        console.log('No speech synthesis available.');
    }
}