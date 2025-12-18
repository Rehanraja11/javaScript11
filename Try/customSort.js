// const array = [99, 4, 54, 6, 36, 75, 1, 5, 85]
// // const array = ["Banana", "Graps", "Apple", "Orange", "Kiwi", "Greenapple"]

// function sort(item, condition) {
//     for (let i = 0; i < item.length; i++) {
//         for (let j = 0; j < item.length; j++) {
//             if (condition === "a" && item[j] > item[j + 1] ||
//                 condition === "d" && item[j] < item[j + 1]) {
//                 let swap = item[j]
//                 item[j] = item[j + 1]
//                 item[j + 1] = swap
//             }
//         }
//     }
//     return item
// }

// const sortedArray = sort(array, "d")
// console.log(sortedArray)


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
    { id: "i3", orderId: "o1", amount: 500 },
    { id: "i4", orderId: "o1", amount: 200 },
    { id: "i5", orderId: "o3", amount: 300 },
    { id: "i6", orderId: "o3", amount: 1000 },
    { id: "i7", orderId: "o1", amount: 900 },
    { id: "i8", orderId: "o1", amount: 300 },
];

const topN = 3;

function topCustomersBySpend({ users, orders, ordersItems, topN }) {
    const activeUsers = users.filter((u) => u.active);


    const orderTotals = {};
    for (const item of ordersItems) {
        if (!orderTotals[item.orderId]) orderTotals[item.orderId] = 0;
        orderTotals[item.orderId] += item.amount;
    }


    const userSpend = {};
    for (const order of orders) {
        const orderTotal = orderTotals[order.id] || 0;
        if (!userSpend[order.userId]) userSpend[order.userId] = 0;
        userSpend[order.userId] += orderTotal;
    }


    const activeUsersWithSpend = activeUsers.map((u) => ({
        ...u,
        totalSpend: userSpend[u.id] || 0,
    }));


    activeUsersWithSpend.sort((a, b) => b.totalSpend - a.totalSpend);

    return activeUsersWithSpend.slice(0, topN);
}

console.log(topCustomersBySpend({ users, orders, ordersItems, topN }));
