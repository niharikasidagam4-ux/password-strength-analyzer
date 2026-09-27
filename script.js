
function analyzePassword() {

    const password = document.getElementById("password").value;

    let score = 0;

    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    const specialCheck = /[^A-Za-z0-9]/.test(password);
    const uniqueCheck = !/(.)\1\1/.test(password);

    if (password.length >= 8) {
        score += 20;
    }

    if (password.length >= 12) {
        score += 10;
    }

    if (uppercaseCheck) {
        score += 15;
    }

    if (lowercaseCheck) {
        score += 15;
    }

    if (numberCheck) {
        score += 15;
    }

    if (specialCheck) {
        score += 15;
    }

    if (uniqueCheck) {
        score += 10;
    }

    updateCheck("length", lengthCheck, "At least 8 characters");
    updateCheck("uppercase", uppercaseCheck, "Contains uppercase letter");
    updateCheck("lowercase", lowercaseCheck, "Contains lowercase letter");
    updateCheck("number", numberCheck, "Contains a number");
    updateCheck("special", specialCheck, "Contains special character");
    updateCheck("unique", uniqueCheck, "Avoids repeated characters");

    const strengthText = document.getElementById("strengthText");
    const scoreText = document.getElementById("scoreText");
    const strengthBar = document.getElementById("strengthBar");
    const suggestionText = document.getElementById("suggestionText");

    strengthBar.style.width = score + "%";

    scoreText.textContent = "Score: " + score + "/100";

    if (password.length === 0) {

        strengthText.textContent = "Enter a password";
        suggestionText.textContent =
            "Enter a password to receive security suggestions.";

    } else if (score < 40) {

        strengthText.textContent = "Weak Password";

        suggestionText.textContent =
            "Use a longer password with uppercase letters, lowercase letters, numbers and special characters.";

    } else if (score < 70) {

        strengthText.textContent = "Medium Password";

        suggestionText.textContent =
            "Your password can be improved by increasing its length and adding more character types.";

    } else {

        strengthText.textContent = "Strong Password";

        suggestionText.textContent =
            "Good password strength. Avoid using the same password on multiple websites.";

    }
}


function updateCheck(id, passed, text) {

    const element = document.getElementById(id);

    if (passed) {

        element.textContent = "✅ " + text;

    } else {

        element.textContent = "❌ " + text;

    }
}


function togglePassword() {

    const passwordInput = document.getElementById("password");
    const toggleButton = document.getElementById("toggleBtn");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        toggleButton.textContent = "Hide";

    } else {

        passwordInput.type = "password";
        toggleButton.textContent = "Show";

    }
}
