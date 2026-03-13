const celsiusEl =document.getElementById("celsius");
const fahrenheitEl =document.getElementById("fahrenheit");
const kelvinEl =document.getElementById("kelvin");


function computeTemp(event) {
     const currentvalue = +event.target.value;

     switch (event.target.name) {
        case "celsius":
            kelvinEl.value = (currentvalue + 273.32);
            fahrenheitEl.value = (currentvalue * 1.8 + 32);
            break;
        case "fahrenheit":
             celsiusEl.value = ((currentvalue - 32) / 1.8);
             kelvinEl.value = ((currentvalue - 32)/ 1.8 + 273.32);
             break;
            case "kelvin":
            celsiusEl.value = (currentvalue -273.32);
            fahrenheitEl.value = ((value - 273.32) * 1.8 + 32);
            break;
        default:
            break;
    }
    
}
