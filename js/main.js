const text = document.getElementById('inputText')
const button = document.getElementById('speech');

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const body = document.body;

const anio = document.querySelector('.year');
anio.textContent = new Date().getFullYear();

button.addEventListener('click',()=>{
    speechText = text.value;

    let speechData = new SpeechSynthesisUtterance();

    if(speechText.length === 0){
        speechData.text = "No existe texto a redactar";
        speechSynthesis.speak(speechData); 
    }else{
        speechData.text = speechText;
        speechSynthesis.speak(speechData);
    }
})

sun.addEventListener('click',()=>{
    body.classList.add('dark');
    sun.style.display = "none";
    moon.style.display = "block";
})

moon.addEventListener('click',()=>{
    body.classList.remove('dark');
    sun.style.display = "block";
    moon.style.display = "none";
})