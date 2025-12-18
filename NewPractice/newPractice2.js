// Brief: From users and orders, compute total spend per active user and return top N by spend.


users = [
    { id: 1, name: "Aisha", active: true },
    { id: 2, name: "Ravi", active: true },
    { id: 3, name: "Mira", active: true },
]
orders = [
    { id: "o4", userId: 2, amount: 1200 },
    { id: "o1", userId: 1, amount: 200 },
    { id: "o2", userId: 3, amount: 200 },
    { id: "o3", userId: 1, amount: 500 },
]

topN = 2


function topCustomersBySpend({ users, orders, topN }) {

    const activeUsers = users.filter(u => u.active)


    const spendValues = {};
    for (const order of orders) {
        if (!spendValues[order.userId]) spendValues[order.userId] = 0;
        spendValues[order.userId] += order.amount;
    }


    const activeUsersWithSpend = activeUsers.map(user => ({
        ...user,
        totalSpend: spendValues[user.id] || 0
    }));

    activeUsersWithSpend.sort((a, b) => b.totalSpend - a.totalSpend)


    return activeUsersWithSpend.slice(0, topN);
}

console.log(topCustomersBySpend({ users, orders, topN }));

