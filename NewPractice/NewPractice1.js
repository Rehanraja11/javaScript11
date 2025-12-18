const users = [
    { id: 1, name: "Aisha", active: true },
    { id: 2, name: "Ravi", active: true },
    { id: 3, name: "Mira", active: true },
];

const orders = [
    { id: "o4", userId: 2 },
    { id: "o1", userId: 1 },
    { id: "o2", userId: 3 },
    { id: "o3", userId: 1 },
];

const ordersItems = [
    { id: "i1", orderId: "o2", amount: 200 },
    { id: "i2", orderId: "o2", amount: 800 },
    { id: "i3", orderId: "o4", amount: 500 },
    { id: "i4", orderId: "o1", amount: 200 },
    { id: "i5", orderId: "o4", amount: 300 },
    { id: "i6", orderId: "o3", amount: 1000 },
    { id: "i7", orderId: "o1", amount: 900 },
    { id: "i8", orderId: "o4", amount: 300 },
];

const topN = 3;

function topCustomersBySpend({ users, orders, ordersItems, topN }) {
    const activeUsers = users.filter((u) => u.active);


    const orderTotals = {};
    for (const item of ordersItems) {
        if (!orderTotals[item.orderId]) orderTotals[item.orderId] = 0;
        orderTotals[item.orderId] += item.amount;
    }

    const ok = id && at > 0 && dot > at + 1 && dot < email.length - 1;
    (ok ? valid : invalid).push(normalized);
    const spendByusers = {};
    for (const order of orders) {
        const orderTotal = orderTotals[order.id] || 0;
        if (!spendByusers[order.userId]) spendByusers[order.userId] = 0;
        spendByusers[order.userId] += orderTotal;
    }

    const activeUsersWithSpend = activeUsers.map((u) => ({
        ...u,
        totalSpend: spendByusers[u.id] || 0,
    }));


    activeUsersWithSpend.sort((a, b) => b.totalSpend - a.totalSpend);

    return activeUsersWithSpend.slice(0, topN);
}

console.log(topCustomersBySpend({ users, orders, ordersItems, topN }));






// function planFulfillment(orders, stock) {
//     return orders.map(o => {
//         let canFulfill = true, totalValue = 0;

//         const lines = o.lines.map(l => {
//             const s = stock.find(x => x.sku === l.sku) || { qty: 0, price: 0 };

//             let fulfill = l.qty;
//             if (fulfill > s.qty) fulfill = s.qty;

//             const short = l.qty - fulfill;
//             const total = fulfill * s.price;

//             if (short) canFulfill = false;
//             totalValue += total;

//             return {
//                 sku: l.sku,
//                 qty: l.qty,
//                 available: s.qty,
//                 fulfillQty: fulfill,
//                 shortfall: short,
//                 lineTotal: total
//             };
//         });

//         return { id: o.id, canFulfill, totalValue, lines };
//     });
// }
