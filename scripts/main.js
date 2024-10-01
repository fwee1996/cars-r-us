import { PaintOptions } from './paints.js'
import { InteriorOptions } from './interiors.js'
import { WheelOptions } from './wheels.js'
import { TechnologyOptions } from './technologies.js'
import { createCustomOrder } from './SaveSubmission.js'
import { Orders } from './Orders.js'
 


const container = document.querySelector("#container")

const render = async () => {
    const paintOptionsHTML = await PaintOptions()
    const interiorOptionsHTML= await InteriorOptions()
    const wheelOptionsHTML = await WheelOptions()
    const technologyOptionsHTML = await TechnologyOptions()
    const buttonHTML= await createCustomOrder()
    const ordersHTML =await Orders()

    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">

        <section class="firstTwoChoices">
            <section class="choices__paints options">
                ${paintOptionsHTML}
            </section>

            <section class="choices__interiors options">
            ${interiorOptionsHTML}
            </section>
            </section>

            <section class="nextTwoChoices">
            <section class="choices__wheels options">
            ${wheelOptionsHTML} 
            </section>

            <section class="choices__technologies options">
            ${technologyOptionsHTML} 
            </section>

        

        </article>

        <article class="button">
        ${buttonHTML}
        </article>
        

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML
    
}

 document.addEventListener("stateChanged", render)//normally, ("click",--handler--here is render)

 render()