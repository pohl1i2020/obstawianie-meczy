const gosp = document.querySelector('#gosp')
const dogrywka = document.querySelectorAll('[name="dogr"]')
const display = document.querySelector('#display')
const form = document.querySelector('form')
const dodatki = document.querySelectorAll('[name = "dod"]')
let message = "";

form.addEventListener('submit', handleSubmit)

function handleSubmit(evt){
    evt.preventDefault()
    // console.log(evt)
    for (let i=0; i<dogrywka.length; i++){
        if (dogrywka[i].checked) {
           message += `<p>${dogrywka[i].value}</p>`;
        }
    }
    
    for (let i=0; i<dodatki.length; i++){
        if (dodatki[i].checked){
            message += `<p>${dodatki[i].value}</p>`;
            
        }
        
    }
    display.innerHTML = message;   
}