const btnEl = document.getElementById("btn")
const bmiinputEl = document.getElementById("bmi-result")
const weightconditionEl = document.getElementById("weight-condition")




function calculateBMI(){
    const heightvalue = document.getElementById("height").value /100
    const weightvalue = document.getElementById("weight").value

    const bmivalue = weightvalue / (heightvalue * heightvalue);

    bmiinputEl.value = bmivalue;


    if(bmivalue < 18.5){
        weightconditionEl.innerText = "under weight"

    }else if (bmivalue >= 18.5 && bmivalue <= 24.9)
        weightconditionEl.innerText = "normal weight"

        if(bmivalue > 30.0){
            weightconditionEl.innerText = "obesity"
        }
    
        
    
     
  weightconditionEl.innertext = "under weight"
    

}

btnEl.addEventListener("click", calculateBMI)                         