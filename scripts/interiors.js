import { setInteriorChoice } from "./transientstate.js";


const handleInteriorChoice = (event) => {
    if (event.target.id === "interior") {
        setInteriorChoice(parseInt(event.target.value))//see name in TS.js
    }
}

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors= await response.json()

    //debugger

    document.addEventListener("change", handleInteriorChoice)

//     let interiorOptionsHTML ="<h2>Interiors</h2>"

// for (const interior of interiors){
//     interiorOptionsHTML+=`<div><input type='radio' name='interior' value='${interior.id}'/> ${interior.fabric}</div>`
// }

let interiorOptionsHTML = "<h2>Interiors</h2>";
interiorOptionsHTML += `<select id="interior">
<option value="0">Select a interior material</option>`;// using format above for select dropdown 

for (const interior of interiors) {
    interiorOptionsHTML += `<option value="${interior.id}">${interior.fabric}</option>`;
}

interiorOptionsHTML += `</select>`; //dont forget to close the select dropdown!

//debugger
return interiorOptionsHTML
}