function checkAnswer() {
    const correctAnswer = "4";
    const feedback = document.getElementById("feedback");
    const selected = document.querySelector('input[name="quiz"]:checked');

    if (!selected) {
        feedback.textContent = "Please select an answer first!";
        return;
    }

    const userAnswer = selected.value;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// event listener
const button = document.getElementById("submit-answer");
button.addEventListener("click", checkAnswer);