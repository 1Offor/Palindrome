document.getElementById('check-btn').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (!textInput) {
        alert("Please input a value");
        return;
    }

    const normalizedInput = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isPalindrome = normalizedInput === normalizedInput.split('').reverse().join('');

    if (isPalindrome) {
        resultElement.textContent = `${textInput} is a palindrome`;
        resultElement.className = 'is-palindrome';
    } else {
        resultElement.textContent = `${textInput} is not a palindrome`;
        resultElement.className = 'is-not-palindrome';
    }
});