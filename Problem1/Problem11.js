/*
Brief: For each order line, find stock, compute fulfillQty, shortfall, and order total; flag canFulfill.
*/
// Input:

stock = [
    { sku: "A", qty: 5, price: 100 },
    { sku: "B", qty: 0, price: 50 },
]
orders = [
    { id: "o1", lines: [{ sku: "A", qty: 2 }, { sku: "B", qty: 1 }] },
    { id: "o2", lines: [{ sku: "A", qty: 3 }] },
]


function planFulfillment(orders, stock) {
    return orders.map(order => {
        let canFulfill = true
        let totalValue = 0;

        const lines = order.lines.map((l) => {
            const s = stock.find(x => x.sku === l.sku) || { qty: 0, price: 0 };


            let fulfill = l.qty;
            if (fulfill > s.qty) {
                fulfill = s.qty;
            }

            const short = l.qty - fulfill;
            const total = fulfill * s.price



            if (short) {
                canFulfill = false;
            }
            totalValue += total

            return {
                sku: l.sku,
                qty: l.qty,
                available: s.qty,
                fulfillQty: fulfill,
                shortfall: short,
                lineTotal: total,
            }
        })
        return { canFulfill, id: order.id, totalValue, lines }
    });
}


console.log(planFulfillment(orders, stock))


// Output:
// [
//     {
//         id: "o1",
//         canFulfill: false,
//         totalValue: 200,
//         lines: [
//             { sku: "A", qty: 2, available: 5, fulfillQty: 2, shortfall: 0, lineTotal: 200 },
//             { sku: "B", qty: 1, available: 0, fulfillQty: 0, shortfall: 1, lineTotal: 0 }
//         ]
//     },
//     {
//         id: "o2",
//         canFulfill: true,
//         totalValue: 300,
//         lines: [
//             { sku: "A", qty: 3, available: 5, fulfillQty: 3, shortfall: 0, lineTotal: 300 }
//         ]
//     }
// ]
