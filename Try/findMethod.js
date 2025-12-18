function ownfind(array, callback, trueCallback, falseCallback) {

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return trueCallback(array[i], i);
        }
    }
    return falseCallback();
}

let Marks = [85, 45, 63, 89, 78]
let finalResult = ownfind(Marks, (x) => {
    return x === 8
}, found, notFound);


function found(val) {
    return val
}
function notFound() {
    return `Values Not Matching`
}


// console.log(finalResult)




// function ownfind(array, callback) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < array.length; i++) {
//             if (callback(array[i])) {
//                 return resolve(array[i]);
//             }
//         }

//         return reject("Values Not Found")
//     });
// }

// let Marks = [85, 45, 63, 89, 78, 85];

// ownfind(Marks, (z) => z === 4).then((succes) => {
//     console.log("Found", succes)
// }).catch((error) => {
//     console.log(error)
// })


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
    const activeUsers = users.filter(u => u.active);


    const orderToUser = {};
    for (const order of orders) {
        orderToUser[order.id] = order.userId;
    }

    const userSpend = {};
    for (const item of ordersItems) {
        const userId = orderToUser[item.orderId];
        if (!userId) continue;
        userSpend[userId] = (userSpend[userId] || 0) + item.amount;
    }


    const activeUsersWithSpend = activeUsers.map(u => ({
        ...u,
        totalSpend: userSpend[u.id] || 0
    }));

    activeUsersWithSpend.sort((a, b) => b.totalSpend - a.totalSpend);

    return activeUsersWithSpend.slice(0, topN);
}

console.log(topCustomersBySpend({ users, orders, ordersItems, topN }));
