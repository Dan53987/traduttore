const langButtons = document.querySelectorAll(".l-button");
const inputText = document.querySelector(".text-input")
const trans_text = document.querySelector(".trans-text")
const trans_flag = document.querySelector(".trans-flag")
const reset_button = document.querySelector(".r-button")

langButtons.forEach(function(langButton){
    langButton.addEventListener('click', function(){
        const text = inputText.value;
        const lang = langButton.dataset.lang;
        const flag =langButton.innerText;
        translate(text, lang, flag);
        
    })
});

async function translate(text, lang, flag){
    const url =`https:api.mymemory.translated.net/get?q=${text}&langpair=it|${lang}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    trans_text.innerText=jsonData.responseData.translatedText
    trans_flag.innerText= flag
    console.log(jsonData.responseData.translatedText)
}

reset_button.addEventListener('click', function(){
    trans_text.innerText='Traduzione';
    trans_flag.innerText='';
    inputText.value='';
} )