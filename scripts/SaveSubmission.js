import { placeOrder } from "./transientstate.js"


     const handleCustomOrderClick = (clickEvent) => {
        if (clickEvent.target.id === "saveCustomOrder") {
            placeOrder()
        }
    }

export const createCustomOrder = () => {

    document.addEventListener("click", handleCustomOrderClick)

    return "<div><button id='saveCustomOrder'>Place Car Order</button></div>" 
     
}