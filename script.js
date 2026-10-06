const rollButton = document.getElementById("rollButton");
const dice = document.getElementById("dice");
const guessInput = document.getElementById("guess");
const result = document.getElementById("result");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

rollButton.addEventListener("click", function () {

    let guess = Number(guessInput.value);

    // Check input
    if (guess < 1 || guess > 6 || !Number.isInteger(guess)) {
        result.textContent = "Please enter a number from 1 to 6.";
        result.style.color = "orange";
        return;
    }

    // Disable button while rolling
    rollButton.disabled = true;

    // Clear previous result
    result.textContent = "";

    // Start dice animation
    dice.classList.add("rolling");

    // Change dice face while rolling
    let rolling = setInterval(function () {

        let randomNumber = Math.floor(Math.random() * 6);

        dice.textContent = diceFaces[randomNumber];

    }, 100);

    // Stop rolling after 1.5 seconds
    setTimeout(function () {

        clearInterval(rolling);

        dice.classList.remove("rolling");

        // Generate final dice number
        let finalNumber = Math.floor(Math.random() * 6) + 1;

        // Show final dice face
        dice.textContent = diceFaces[finalNumber - 1];

        // Check user's guess
        if (guess === finalNumber) {

            result.textContent = "🎉 YOU WIN!";
            result.style.color = "green";

        } else {

            result.textContent = "😔 YOU LOSE! TRY AGAIN";
            result.style.color = "red";

        }

        // Enable button
        rollButton.disabled = false;

    }, 1500);

});