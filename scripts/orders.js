// export const Orders = async () => {
//     const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
//     const orders = await fetchResponse.json()


//     // To automatically format the number as currency
// // variableWithTotalPrice.toLocaleString("en-US", {
// //     style: "currency",
// //     currency: "USD"
// // })


//  // Check if technology exists before accessing its price? See note.txt
// //  if (order.technology) {
// //     orderPrice += order.technology.price;
// // }

//     let ordersHTML = orders.map(
//         (order) => {
//               let orderPrice =order.wheel.price + order.interior.price + order.paint.price + order.technology.price

//               // Round the orderPrice to 2 decimal places!!!!
//             orderPrice = orderPrice.toFixed(2)

//             orderPrice = parseFloat(orderPrice).toLocaleString("en-US", {
//                     style: "currency",
//                     currency: "USD"
//                 })

//             let orderWheel=order.wheel.type
//             let orderInterior=order.interior.fabric
//             let orderPaint=order.paint.color
//             let orderTech=order.technology.package


//             return `<div class="orders">
//                  ${orderPaint} car with ${orderWheel}, ${orderInterior}, and the ${orderTech} for a total cost of ${orderPrice}
//             </div>`
//         }
//     ).join("") // Convert the array of HTML strings into a single string!

//     return ordersHTML
// }




export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const orders = await fetchResponse.json()

    //start <article> section, .map(), return
    let ordersHTML  = '<article class="orderList">'

    ordersHTML += orders.map(
        (order) => {
              let orderPrice =order.wheel.price + order.interior.price + order.paint.price + order.technology.price

              // Round the orderPrice to 2 decimal places!!!!
            orderPrice = orderPrice.toFixed(2)

            orderPrice = parseFloat(orderPrice).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })

            let orderWheel=order.wheel.type
            let orderInterior=order.interior.fabric
            let orderPaint=order.paint.color
            let orderTech=order.technology.package


            return `<section class="order card"> <!-- Added the order class here -->
            ${orderPaint} car with ${orderWheel}, ${orderInterior}, and the ${orderTech} for a total cost of ${orderPrice}
       </section>`
        }
    ).join("") // Convert the array of HTML strings into a single string!

    ordersHTML += `</article>`

    return ordersHTML
}

