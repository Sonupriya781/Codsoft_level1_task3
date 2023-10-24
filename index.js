let total = 0; 
let buffer = "0"; //what's on display

let operator = null;

const calcScreen = document.querySelector(".screen");
document.querySelector('.calculator-buttons').addEventListener("click",function(event){
    btnClick(event.target.innerHTML);
});
function btnClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    displayScreen();
}
function handleSymbol(value){
    switch (value){
    case "CANCEL":
        buffer = "0";
        total = 0;
        operator = null;
        break;
    case "=":
        if(operator === null){ 
            return;
        }
        calculation(parseInt(buffer));
            buffer = "" + total;
            operator = null;
            total = 0;
            break;
    case "←":
        if(buffer.length === 1){ 
            buffer = "0";
        }
        else{
            buffer = buffer.substring(0,buffer.length-1); 
        }
        break;
    default:
        handleMath(value);
        break;
    }
}
function handleNumber(value){
    if(buffer === "0"){
        buffer = value;
    }else{
        buffer += value;
    }
}
function handleMath(value){
    const internalBuffer = parseInt(buffer);
        if (total === 0){
            total = internalBuffer;
        }else{
            calculation(internalBuffer);
        }
    
        operator = value;
        buffer = 0;
}
    
function calculation(internalBuffer){
        if(operator === "+"){
            total += internalBuffer;
        }else if(operator === "-"){
            total -= internalBuffer;
        }else if(operator === "x"){
            total *= internalBuffer;
        }else{
            total /= internalBuffer;
        }
}
    
function displayScreen(){
        calcScreen.value = buffer;
}

