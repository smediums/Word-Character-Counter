const textArea = document.getElementById('inputTextArea');
const charCount = document.getElementById('characterCount');
const wordCount = document.getElementById('wordCount');


//
textArea.addEventListener('input', () => {
    //Number of Characters
    charCount.textContent = textArea.value.length;

    //Create array By Spaces 
    let allText = textArea.value.trim();
    wordCount.textContent = allText.split(/\s+/).filter((el) => el).length;


});