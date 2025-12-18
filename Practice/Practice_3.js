// Tasks:
// 1. Get all product names using map()
// 2. Find products under $200 using filter()
// 3. Calculate total inventory value using reduce()
// 4. Get electronics that are in stock (chain filter methods)
// 5. Apply 10% discount to all prices using map()

const products = [
    { id: 1, name: "Phone", price: 699, category: "electronics", inStock: true },
    { id: 2, name: "Laptop", price: 1299, category: "electronics", inStock: false },
    { id: 3, name: "Book", price: 15, category: "books", inStock: true },
    { id: 4, name: "Headphones", price: 199, category: "electronics", inStock: true }
];

// 1. Get all product names using map()
const productName = products.map((product) => {
    return product.name
})
console.log(productName)

// 2. Find products under $200 using filter()

const productPrice = products.filter((price) => {
    return price.price <= 200
})
console.log(productPrice)

// productPrice.forEach((v1) => {
//     console.log(v1)
// })


//  3. Calculate total inventory value using reduce()

const totalInventory = products.reduce((v1, v2) => {
    return v1 + v2.price
}, 0)

console.log(totalInventory);



// 4. Get electronics that are in stock (chain filter methods)

const inStockvalues = products.filter(e => e.inStock)
    .filter(e => e.category === "electronics")
console.log(inStockvalues)




// 5. Apply 10% discount to all prices using map()

const discount = products.map((p) => {
    const discountValue = p.price * 10 / 100
    const totalDiscount = p.price - discountValue
    return totalDiscount

})
console.log(discount)


// Array destructuring
// Extract first two colors and rest in separate variables
const colors = ["red", "green", "blue", "yellow", "purple"];

const [color1, color2, ...rest] = colors
console.log(color1 + " " + color2 + " " + rest)



// Extract x, y, z coordinates
const coordinates = [10, 20, 30];

const [x, y, z] = coordinates

console.log(x, y, z)



// Object destructuring
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

// Extract firstName, lastName, and city in one line

const { firstName, lastName, address: { city } } = person;
console.log(firstName, lastName, city)
