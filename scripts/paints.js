 import { setPaintChoice } from "./transientstate.js"

//  To get the option that the user selected, you would access the .value property of the <select> element, not the individual options.
const handlePaintChoice = (event) => {
    if (event.target.id === "paint") {
        setPaintChoice(parseInt(event.target.value))//see name in TS.js
    }
}

export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints= await response.json()

    //debugger

    document.addEventListener("change", handlePaintChoice)

//select dropdown format:
{/* <select id="resource">
    <option value="0">Prompt to select resource...</option>
    <option value="1">First option</option>
    <option value="2">Second option</option>
</select> */}

//select uses id=""", radio uses name!

let paintOptionsHTML = "<h2>Paints</h2>"

paintOptionsHTML += `<select id="paint">`
paintOptionsHTML += `<option value="0">Select a paint color</option>`;// using format above for select dropdown 

//for of loop method:
for (const paint of paints) {
    paintOptionsHTML += `<option value="${paint.id}">${paint.color}</option>`;
}

//Alt: instead of for of loop using .map()  to build a string array:
// const arrayOfOptions = paints.map( (paint) => {
//     return `<option value="${paint.id}">${paint.color}</option>`
// }
// )
// html += arrayOfOptions.join("")


paintOptionsHTML += `</select>`; //dont forget to close the select dropdown!
//debugger
return paintOptionsHTML
}