let value1 = prompt("Enter The First Value : ");
let value2 = prompt("Enter The Second Value : ");
let operators = prompt("Enter Operators  + , -, *, /");
value1 = Number.parseInt(value1)
value2 = Number.parseInt(value2)
let result;

switch (operators) {
    case '+':
        result = value1 + value2;
        console.log(result)
        break;
    case '-':
        result = value1 - value2;
        console.log(result)
        break;
    case '*':
        result = value1 * value2;
        console.log(result)
        break;
    case '/':
        result = value1 / value2;
        console.log(result)
        break;
}

// function myownfilter(values, callback) {
//     let newValues = [];
//     for (let i = 0; i < values.length; i++) {
//         if (callback(values[i])) {
//             newValues.push(values[i])
//         }

//     }
//     return newValues
// }



// let finalResult = myownfilter(names, function get(e) {



// });


// console.log(finalResult)

// function topCustomersBySpend({ users, orders, topN }) {
//   // Step 1: Filter only active users
//   const activeUsers = users.filter(u => u.active);

//   // Step 2: Compute total spend per user
//   const spendMap = {};
//   for (const order of orders) {
//     if (!spendMap[order.userId]) spendMap[order.userId] = 0;
//     spendMap[order.userId] += order.amount;
//   }

//   // Step 3: Attach totalSpend to each active user (default 0 if no orders)
//   const activeUsersWithSpend = activeUsers.map(user => ({
//     ...user,
//     totalSpend: spendMap[user.id] || 0
//   }));

//   // Step 4: Sort by totalSpend descending and take top N
//   activeUsersWithSpend.sort((a, b) => b.totalSpend - a.totalSpend);

//   return activeUsersWithSpend.slice(0, topN);
// }
