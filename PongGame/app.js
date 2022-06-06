const ball = document.querySelector(".ball");

var i = 0;
var j = 0;
function moving() {
    if (i <= 18) {
        ball.style.transform = `translateX(${i}rem)`;
        i++;
        if(i==18){
            j=0;
        }
    }else{
        i--;
        ball.style.transform = `translateX(${i}rem)`
    }

    if(j <= 18){
        ball.style.transform = `translateX(${j}rem)`;
        j++;
        if(j==18){
            i=0;
        }
    }else{

    }

    


}


setInterval(moving, 100);






