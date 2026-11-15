const increase = document.getElementById("inbtn");
const reset = document.getElementById("rebtn");
const decrease = document.getElementById("debtn");
const num = document.getElementById("number");
let count=0;

increase.onclick =function(){
    count++;
    num.textContent = count;
}

decrease.onclick = function(){
    count--;
    num.textContent=count;
} 

reset.onclick = function(){
    count=0;
    num.textContent=count;
}

