// console.log("Hello")
// function myownfilter(values, callback) {
//     let newValues = [];
//     for (let i = 0; i < values.length; i++) {
//         if (callback(values[i])) {
//             newValues.push(values[i]);
//         }
//     }
//     return newValues;
// }

// let names = ["rehann", "Soyab bhai", "Alfaiz Bh ai", "abbAs", "Mohammad Ali"];



// let finalResult = myownfilter(names, (str) => {

//     let words = str.split(" ");
//     return words.every(word => word[0] === word[0].toUpperCase());
// });

// console.log(finalResult);


function topCustomersBySpend({ users, orders, topN }) {
    // 1️⃣ Filter only active users
    const activeUsers = users.filter(u => u.active);

    // 2️⃣ Compute total spend per user
    const spendMap = {};
    for (const order of orders) {
        if (!spendMap[order.userId]) spendMap[order.userId] = 0;
        spendMap[order.userId] += order.amount;
    }

    // 3️⃣ Attach totalSpend to each active user (default 0 if no orders)
    const usersWithSpend = activeUsers.map(u => ({
        ...u,
        totalSpend: spendMap[u.id] || 0
    }));

    // 4️⃣ Sort by totalSpend descending
    usersWithSpend.sort((a, b) => b.totalSpend - a.totalSpend);

    // 5️⃣ Return top N
    return usersWithSpend.slice(0, topN);
}

// ✅ Example usage:
const users = [
    { id: 1, name: "Aisha", active: true },
    { id: 2, name: "Ravi", active: false },
    { id: 3, name: "Mira", active: true },
];

const orders = [
    { id: "o1", userId: 1, amount: 1200 },
    { id: "o2", userId: 3, amount: 500 },
    { id: "o3", userId: 1, amount: 300 },
    { id: "o4", userId: 2, amount: 800 },
];

console.log(topCustomersBySpend({ users, orders, topN: 2 }));

