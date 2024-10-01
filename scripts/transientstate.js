const transientState={
    // "id": 1,---taken out bcs its tracked by json server
    paintId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId:0
}

export const setPaintChoice = (chosenPaint) => {
    transientState.paintId=chosenPaint
    console.log(transientState)
}


export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId=chosenInterior
    console.log(transientState)
}

export const setTechnologyChoice = (chosenTechnology) => {
    transientState.technologyId=chosenTechnology
    console.log(transientState)
}

export const setWheelsChoice = (chosenWheels) => {
    transientState.wheelId=chosenWheels
    console.log(transientState)
}

export const placeOrder= async()=>{
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"
    },body: JSON.stringify(transientState) //stringify the object transientState 
}
  // Send the transient state to your API
const response = await fetch ("http://localhost:8088/orders", postOptions) //rmbr async in fn declaration

//******//CUSTOM EVENT: go get the state when the state changes
        //go get the state when the state changes so you can see live changes on network tab in devTools
        const customEvent = new CustomEvent("stateChanged")
        document.dispatchEvent(customEvent)

}