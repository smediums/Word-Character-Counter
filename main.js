const textArea = document.getElementById('inputTextArea');
const charCount = document.getElementById('characterCount');
const wordCount = document.getElementById('wordCount');
const setGoal = document.getElementById('wordsAmount');
const set = document.getElementById('set');
const tillGoal = document.querySelector('.wordsTillGoal');

//
textArea.addEventListener('input', () => {
    let curWordCount = parseInt(wordCount.textContent);
    let curWordsTillGoal = parseInt(setGoal.value);
    //Number of Characters
    charCount.textContent = textArea.value.length;

    //Create array By Spaces 
    let allText = textArea.value.trim();
    wordCount.textContent = allText.split(/\s+/).filter((el) => el).length;

    tillGoal.innerHTML = `${curWordsTillGoal - curWordCount} words until reach goal`
   
});

setGoal.addEventListener('input', () => {
    const num = parseInt(setGoal.value);
    const onlyNumbers = /[0-9]|\./;

    if(!onlyNumbers.test(num)){
        setGoal.value = '';
    }
})

set.addEventListener('click', () => {

    if(setGoal.value == '' ){
        tillGoal.innerHTML = `0 words until you reach your goal`

    }else{
        tillGoal.innerHTML = `${setGoal.value} words until you reach your goal`
    console.log(parseInt(wordCount.textContent))
    }
    
})