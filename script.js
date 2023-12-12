   function checkAnswer(selectedOption) {
        var correctAnswer = 'Paris';
        var resultElement = document.getElementById('result');

        if (selectedOption === correctAnswer) {
            resultElement.innerHTML = "Correct! 🎉";
        } else {
            resultElement.innerHTML = "Incorrect! 😞";
        }
    }
