const arac1 = document.querySelector("#arac1");
const arac2 = document.querySelector("#arac2");
const arac3 = document.querySelector("#arac3");
const aracs = document.querySelectorAll(".arac");
const goBtn = document.querySelector("#goBtn");
const winner = document.querySelector("#winner");
var total1 = 0;
var total2 = 0;
var total3 = 0;

goBtn.addEventListener("click", e => {

    let random1 = Math.round(Math.random() * 100 + Math.random() * 50 + 1);
    let random2 = Math.round(Math.random() * 100 + Math.random() * 50 + 1);
    let random3 = Math.round(Math.random() * 100 + Math.random() * 50 + 1);

    let stringX1 = "translate(" + random1.toString() + "px)";
    let stringX2 = "translate(" + random2.toString() + "px)";
    let stringX3 = "translate(" + random3.toString() + "px)";


    if (total1 + 5 >= 1795) {
        winner.innerText = "";
        winner.innerText = "Winner : 1";
        winner.style.zIndex = "1";
        arac1.style.transform += "translate(40px)";
        goBtn.disabled = true;
    } else if (total2 + 5 >= 1795) {
        winner.innerText = "";
        winner.innerText = "Winner : 2";
        winner.style.zIndex = "1";
        arac2.style.transform += "translate(40px)";
        goBtn.disabled = true;
    } else if (total3 + 5 >= 1795) {
        winner.innerText = "";
        winner.innerText = "Winner : 3";
        winner.style.zIndex = "1";
        arac3.style.transform += "translate(40px)";
        goBtn.disabled = true;
    } else {
        arac1.style.transform += stringX1;
        arac2.style.transform += stringX2;
        arac3.style.transform += stringX3;
    }
    total1 += random1;
    total2 += random2;
    total3 += random3;

    console.log(random1, random2, random3);
    console.log(total1);

})