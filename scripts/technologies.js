import { setTechnologyChoice } from "./transientstate.js";


const handleTechnologyChoice = (event) => {
    if (event.target.id === "technology") {
        setTechnologyChoice(parseInt(event.target.value))//see name in TS.js
    }
}

export const TechnologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies= await response.json()

    //debugger

    document.addEventListener("change", handleTechnologyChoice)

//     let technologyOptionsHTML ="<h2>Technologies</h2>"

// for (const technology of technologies){
//     technologyOptionsHTML+=`<div><input type='radio' name='technology' value='${technology.id}'/> ${technology.package}</div>`
// }

let technologyOptionsHTML = "<h2>Technologies</h2>";
technologyOptionsHTML += `<select id="technology">
<option value="0">Select a technology package</option>`;// using format above for select dropdown 

for (const technology of technologies) {
    technologyOptionsHTML += `<option value="${technology.id}">${technology.package}</option>`;
}

technologyOptionsHTML += `</select>`; //dont forget to close the select dropdown!
//debugger
return technologyOptionsHTML
}