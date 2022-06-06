const hourPart = document.querySelector(".hour-part");
const minPart = document.querySelector(".min-part");
const secPart = document.querySelector(".sec-part");


const datePart = document.querySelector(".date-part");

function helloW(){
    console.log("Hello World");
}

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    console.log(seconds);
    if(seconds < 10){
        secPart.innerText = `0${seconds}`;
    }else{
        secPart.innerText = `${seconds}`;
    }
    

    const mins = now.getMinutes();
    if(mins < 10){
        minPart.innerText = `0${mins} :`;
    }else{
        minPart.innerText = `${mins} :`;
    }
       

    const hours = now.getHours();
        hourPart.innerText = `${hours} :`;


    const dateDay = now.getDate();
    const dateMonth = now.getMonth();
    const dateYear = now.getFullYear();
    datePart.innerText = `${dateDay} / ${dateMonth+1} / ${dateYear}`;
    
}

setInterval(setDate,1000);

setInterval(helloW,144000);