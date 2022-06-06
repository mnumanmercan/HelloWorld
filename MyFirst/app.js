
const div = document.querySelector("#blackHole");
const body = document.querySelector("body");
const myH4 = document.querySelector("#myH4");
const scoreBoard = document.querySelector("#scoreBoard");
const GameOver = document.querySelector(".GameO");
let i = 0;
let array = [];
div.addEventListener("mouseover", e => {
    
    let ranPosX = Math.round(Math.random() * 1300 + 1);
    let ranPosY = Math.round(Math.random() * 600 + 1);
    let ranNum = Math.round(Math.random() * 100 + 1);
    
   
    console.log("You clicked black Hole !!!!");
      let stringX = ranPosX.toString() +"px";
      let stringY = ranPosY.toString() +"px";
   
        
            div.style.top = stringY;
            div.style.left = stringX;
            div.style.transition = "0.2s ease";
            console.log(stringX+","+stringY);
            array.push(stringX);

            
     if(ranNum %9 == 0){
         body.style.backgroundColor = "black";
         myH4.style.color = "Red";
         div.style.backgroundColor = "White";
           i=0;
           scoreBoard.innerText = "";
           scoreBoard.append("Hole's Score Board : "+i);
         myH4.innerText = "";
         GameOver.append("Game Over HAHAHA");
         myH4.append("OH you Catched me :(");
     }else{
        body.style.backgroundColor = "white";
        myH4.style.color = "blue";
         div.style.backgroundColor = "black";
         myH4.innerText = "";
         GameOver.innerText="";
         myH4.append("Catch Me , If You Can :)");
         i++;
         console.log("Score : ",i);
         scoreBoard.innerText = "";
         scoreBoard.append("Hole's Score Board : "+i);

     }
})