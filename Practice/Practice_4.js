const salesData = [
    { month: "Jan", sales: 12000, expenses: 8000 },
    { month: "Feb", sales: 15000, expenses: 9000 },
    { month: "Mar", sales: 18000, expenses: 11000 },
    { month: "Apr", sales: 22000, expenses: 13000 }
];


// // 1. Calculate profit for each month (sales - expenses)

// salesData.forEach((v1) => {
//     const profitMargin = v1.sales - v1.expenses
//     console.log(profitMargin)
// })


// // 2. Find the best performing month


// const bestperformingMonth = salesData.reduce((best, current) => {
//     const bestProfit = best.sales - best.expenses;
//     const currentProfit = current.sales - current.expenses;
//     return currentProfit > bestProfit ? current : best;
// });

// console.log(bestperformingMonth.month);



// 3. Calculate average monthly profit

// const monthlyProfit = salesData.map((v1) => v1.sales - v1.expenses);
// const totalProfit = monthlyProfit.reduce((sum, profit) => sum + profit, 0);
// const totalAverage = totalProfit / monthlyProfit.length

// console.log(totalAverage)




// 4. Identify months with profit margin > 30%


// const bestMarginMonths = salesData.filter((data) => {
//     const profit = data.sales - data.expenses;
//     const profitMargin = (profit / data.sales) * 100;
//     return profitMargin > 30;
// });

// console.log(bestMarginMonths);



// // 5. Project next month's sales (increase average by 10%)

// const nextMonthSales = salesData.map((v1) => {
//     const monthAverage = v1.sales * 10 / 100
//     const monthSales = monthAverage + v1.sales

//     return monthSales
// })
// console.log(nextMonthSales)


const employees = [
    { id: 1, name: "Alice", department: "Engineering", salary: 35000, years: 3, skills: ["JavaScript", "React", "Node.js"] },
    { id: 2, name: "Bob", department: "Marketing", salary: 45000, years: 2, skills: ["SEO", "Analytics"] },
    { id: 3, name: "Charlie", department: "Engineering", salary: 75000, years: 5, skills: ["Python", "Django", "PostgreSQL"] },
    { id: 4, name: "Diana", department: "Design", salary: 55000, years: 4, skills: ["Figma", "Photoshop", "CSS"] },
    { id: 5, name: "Eve", department: "Engineering", salary: 18000, years: 1, skills: ["JavaScript", "Vue.js"] }
];






// // Find all engineers with salary > 50000 who know JavaScript
// const bestEngineers = employees
//     .filter(z => z.department === "Engineering")
//     .filter(y => y.salary > 20000)
//     .filter(s => s.skills.includes("JavaScript"));

// console.log(bestEngineers);



// 2. Calculate average salary by department

// const calculate = employees.reduce((acc, emp) => {
//     if (!acc[emp.department]) {
//         acc[emp.department] = { employeeCount: 0, emptotalPayroll: 0 };
//     }
//     acc[emp.department].employeeCount += 1;
//     acc[emp.department].emptotalPayroll += emp.salary;
//     return acc;
// }, {});

// console.log(calculate)





// 3. Create a skills inventory (all unique skills across company)

// const inventory = employees.map(w => w.skills)
//     .flat(2)
//     .reduce((acc, curr) => {
//         if (acc && !acc.includes(curr)) {
//             acc.push(curr)
//         }
//         return acc
//     }, [])
// console.log(inventory)



// // 4. Find employees eligible for promotion (years > 3, salary < 50000)

// const employeesPromotion = employees.filter(e => e.years > 3)
//     .filter(e => e.salary < 50000)
// console.log(employeesPromotion);



// 5. Generate department summary with employee count and total payroll
// const departmentSummary = employees.reduce((acc, emp) => {
//     if (!acc[emp.department]) {
//         acc[emp.department] = { employeeCount: 0, emptotalPayroll: 0 };
//     }
//     acc[emp.department].employeeCount += 1;
//     acc[emp.department].emptotalPayroll += emp.salary;
//     return acc;
// }, {});

// console.log(departmentSummary);




/*
   Data types
   Operators
   Conditional if else 
   Loops 
   Function
   Array
   Object
   Destructure
   DOM
*/