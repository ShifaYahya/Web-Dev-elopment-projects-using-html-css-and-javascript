const  buttonEl = document.getElementById("btn");
const  bmiresultEl =  document.querySelector(".bmi-result");
const weightconditionEl = document.querySelector(".weight-condition");



function calculateBMI(){
    const heightValue = document.querySelector(".height").value/100 ;
    const weightValue = document.querySelector(".weight").value;
    const bmiValue = weightValue / (heightValue * heightValue);
    bmiresultEl.value = bmiValue;
    if(bmiValue < 18.5){
        weightconditionEl.innerText = "Under Weight";

    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightconditionEl.innerText = "Normal Weight";
    } else if(bmiValue >= 25 && bmiValue <= 29.9) {
        weightconditionEl.innerText = "Overweight";
    } else if (bmiValue >= 30) {
        weightconditionEl.innerText = "Obesity";
      }
   

}
buttonEl.addEventListener("click", calculateBMI)

