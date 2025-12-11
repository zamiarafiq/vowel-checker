function checkVowels() {
    let inputBox = document.getElementById("inputBox").value;
    let result = document.getElementById("result");
    let error = document.getElementById("error");

    result.textContent = '';
    error.textContent = '';

    // Show error if empty
    if (!inputBox.trim()) {
        error.textContent = 'Please enter some text';
        error.style.color = 'red';
        return;
    }

    let vowels = ["a", "e", "i", "o", "u", 
                  "A", "E", "I", "O", "U"];

    let count = 0;

    for (let i = 0; i < inputBox.length; i++) {
        if (vowels.includes(inputBox[i])) {
            count++;
        }
    }

    result.textContent = "Number of Vowels: " + count;
    result.style.color = 'green';
}
