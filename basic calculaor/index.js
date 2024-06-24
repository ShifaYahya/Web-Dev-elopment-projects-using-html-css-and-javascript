const buttons = document.querySelectorAll("button");
console.log(buttons);
const resultEl= document.querySelector(".result");

for(let i=0; i<buttons.length; i++){
buttons[i].addEventListener("click", ()=>{
    const buttonValue = (buttons[i].textContent)
    if(buttonValue === "C"){
        clearResult()
    } else if(buttonValue === "="){
        calculateResult()
    } else{
        appendValue(buttonValue)
    }


})
}
function clearResult(){
 resultEl.value = "";
}
function calculateResult(){
 resultEl.value = eval(resultEl.value);

}
function appendValue(buttonValue){
  resultEl.value += buttonValue

}