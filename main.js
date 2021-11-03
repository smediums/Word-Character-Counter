const textArea = document.getElementById('inputTextArea');
const charCount = document.getElementById('characterCount');
const wordCount = document.getElementById('wordCount');
const setGoal = document.getElementById('wordsAmount');

console.log(setGoal)
//
textArea.addEventListener('input', () => {
    //Number of Characters
    charCount.textContent = textArea.value.length;

    //Create array By Spaces 
    let allText = textArea.value.trim();
    wordCount.textContent = allText.split(/\s+/).filter((el) => el).length;
});

setGoal.addEventListener('input', () => {
    const num = parseInt(setGoal.value);
    const onlyNumbers = /[0-9]|\./;

    if(!onlyNumbers.test(num)){
        setGoal.value = '';
    }

    console.log(num)
})