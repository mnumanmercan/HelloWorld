const ekleButton = document.querySelector("#ekleBtn");
const silButton = document.querySelector("#silBtn");
const list = document.querySelector("#list");
const toDo = document.querySelector("#toDo");


let dizi = [];


ekleButton.onclick = function () {
    let li = document.createElement("li");
    list.style.border = "4px solid tomato";
    list.style.float = "left";
    
    /*let btn = document.createElement("button");
    
    btn.style.position = "relative";
    btn.textContent = "Sil";
    btn.style.bottom = "14px";
    btn.style.right = "20px";
    btn.style.width = "50px";
    btn.style.height = "20px";
    btn.style.float = "right";*/
    li.textContent = toDo.value;
    
    if (toDo.value != "") {
        list.appendChild(li);
        //list.appendChild(btn);
        toDo.value = "";
        toDo.focus();
        dizi.push(li);
        console.log(dizi);
    }
 
    

}
let i1 = 0;
list.addEventListener("click" , e => {
    
    if(e.target.innerText != "" && i1==0){
        e.target.style.textDecoration = "line-through";
        console.log(e.target.innerText);
        i1=1;
    }else{
        e.target.style.textDecoration = "none";
        console.log(e.target.innerText); 
        i1=0;
    }
})


list.addEventListener("dblclick" , e => {
    
    let i = 0;
    if(e.target.innerText != "" && i==0){
        list.removeChild(e.target);
        console.log(e.target.innerText);
    }
})


silButton.onclick = function () {
    let li = Array.from(document.querySelectorAll("li"));
    
    if(li.length > 0){
       for(let i = 0;i<li.length;i++){
           list.removeChild(li[i]);
       }
       dizi = [];
         console.log(dizi);
    }

    

}




