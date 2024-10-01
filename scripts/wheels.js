import { setWheelsChoice } from "./transientstate.js";


const handleWheelChoice = (event) => {
    if (event.target.id === "wheel") {
        setWheelsChoice(parseInt(event.target.value))//see name in TS.js
    }
}

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels= await response.json()

    //debugger

    document.addEventListener("change", handleWheelChoice)

//     let wheelOptionsHTML ="<h2>Wheels</h2>"

// for (const wheel of wheels){
//     wheelOptionsHTML+=`<div><input type='radio' name='wheel' value='${wheel.id}'/> ${wheel.type}</div>`
// }

let wheelOptionsHTML = "<h2>Wheels</h2>";
wheelOptionsHTML += `<select id="wheel">
<option value="0">Select a wheel style</option>`;// using format above for select dropdown 

for (const wheel of wheels) {
    wheelOptionsHTML += `<option value="${wheel.id}">${wheel.type}</option>`;
}

wheelOptionsHTML += `</select>`; //dont forget to close the select dropdown!

//debugger
return wheelOptionsHTML
}