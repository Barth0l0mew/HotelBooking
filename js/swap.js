let indexSwap = 0;
function left(){
    mainSwap(indexSwap-=1);
}
function right(){
    mainSwap(indexSwap+=1);
}
function mainSwap (n){
    let swap = document.querySelectorAll(".image");
    console.log(swap)
        if (n> swap.length-1){
            indexSwap=0; 
        }
    if (n<0){
        indexSwap=swap.length-1;  
    }
    for (let i=0; i<swap.length; i++){
        swap[i].style.display = "none";
    }
    swap[indexSwap].style.display= "block";
}
mainSwap(indexSwap);
document.querySelector(".button-left").addEventListener("click",left);
document.querySelector(".button-right").addEventListener("click",right);

let indexSwap1 = 0;
function left1(){
    mainSwap1(indexSwap1-=1);
}
function right1(){
    mainSwap1(indexSwap1+=1);
}
function mainSwap1 (n){
    let swap1 = document.querySelectorAll(".image1");
    console.log(swap1)
        if (n> swap1.length-1){
            indexSwap1=0; 
        }
    if (n<0){
        indexSwap1=swap1.length-1;  
    }
    for (let i=0; i<swap1.length; i++){
        swap1[i].style.display = "none";
    }
    swap1[indexSwap1].style.display= "block";
}
mainSwap1(indexSwap1);
document.querySelector(".button-left1").addEventListener("click",left1);
document.querySelector(".button-right1").addEventListener("click",right1);