const textArea = document.getElementById('inputTextArea');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');
const sentenceCount = document.getElementById('sentenceCount');
const paraCount = document.getElementById('paraCount');
const setGoal = document.getElementById('wordsAmount');
const percentageComplete = document.querySelectorAll('.percentage');


//Toggle menu
document.querySelector('.toggler').addEventListener('click', () => {
    const navLinks = document.querySelectorAll('.navLink');

    //Nav show and hide when hamburg clicked
    document.querySelector('nav').classList.toggle('show');

    //Nav hide when navlink is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('nav').classList.remove('show')
        })
    })
})



//Textarea functionality
textArea.addEventListener('input', () => {
    //Number of Characters
    charCount.textContent = textArea.value.length;

    //Word count
    let allText = textArea.value.trim();
    wordCount.textContent = allText.split(/\s+/).filter((el) => el).length;

    //Sentence count
    numOfSentences = allText.split(/[!.?]|\./).length - 1
    sentenceCount.textContent = numOfSentences
    
    //Paragraph Count
    if(numOfSentences % 3 == 0){
        paraCount.textContent = numOfSentences / 3
    }else{
        let decrementSentence = parseInt(sentenceCount.textContent);
        decrementSentence--;
        if(decrementSentence % 3 == 0){
            paraCount.textContent = decrementSentence / 3
        }else{
            decrementSentence--;
            paraCount.textContent = decrementSentence / 3
        }
    }

    //Percentage completed
    percentageComplete.forEach(percent => {
        const reference = percent.getAttribute('data-reference');
        const references = document.querySelectorAll('h5')
        const inputValue = percent.previousElementSibling.value

        if(inputValue == ''){
            percent.textContent = '0%'
        }else{
            for(let i = 0; i < references.length; i++){
                if(references[i].getAttribute('id') == reference){
                    let count = parseInt(references[i].textContent);
                    let thePercentage = `${((count / parseInt(inputValue)) * 100).toFixed(1)}%`

                    percent.textContent = thePercentage
                    if(percent.textContent == '100.0%'){
                        percent.textContent = '100%'
                        percent.parentElement.classList.add('goalReached');
                        
                    }else{
                        percent.parentElement.classList.remove('goalReached')
                        percent.textContent = thePercentage
                    }

                    if(percent.textContent == '0.0%'){
                        percent.textContent = '0%'
                    }else{
                        percent.textContent = thePercentage;
                    }
                }
            }
        }
    })
});


//Set a goal only allow numbers
setGoal.addEventListener('input', () => {
    const num = parseInt(setGoal.value);
    const onlyNumbers = /[0-9]|\./;

    if(!onlyNumbers.test(num)){
        setGoal.value = '';
    }
})
