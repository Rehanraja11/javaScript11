// // // Task: Convert these regular functions to arrow functions


// // // function square(x) {
// // //   return x * x;
// // // }
// // const square = (x) => x * x
// // console.log(square(5))




// // // function isAdult(age) {
// // //   return age >= 18;
// // // }
// // const isAdult = (age) => age > 18
// // console.log(isAdult(20))


// // // function fullName(first, last) {
// // //   return first + " " + last;
// // // }
// // const fullName = (first, last) => first + "" + last
// // console.log(fullName("John", "Doe"))


// // // ****************************************************************************************


// // // Task: Practice basic array operations
// // const fruits = ["apple", "banana", "orange"];


// // // 1. Log the length of the array
// // console.log("Length:", fruits.length);

// // // 2. Add "grape" to the end of array
// // // fruits.push("grape")



// // // 3. Add "mango" to the beginning of array
// // fruits.splice(2, 0, "mango")




// // // 4. Remove the last element
// // fruits.pop()




// // // / 5. Remove the first element
// // fruits.shift()



// // console.log(fruits)

// // ****************************************************************************************



// // // // Task: Use different loop types to iterate through arrays
// // const grades = [85, 92, 78, 96, 88];


// // // 1. Use a for loop to print each grade
// // console.log("Using for loop:");
// // for (let i = 0; i <= grades.length; i++) {
// //     console.log(grades[i])
// // }



// // // 2. Use a for...of loop to print each grade with "Grade: " prefix
// // console.log("Using for...of loop:");
// // for (const values of grades) {
// //     console.log(`Grade : ${values}`,)
// // }



// // // 3. Calculate and print the sum of all grades using any loop
// // let sum = 0;
// // // your code here

// // for (const values1 of grades) {

// //     sum += values1

// // }
// // console.log("Total sum:", sum);



// // ****************************************************************************************



// // // Task: Practice using map() method


// // const prices = [19.99, 25.50, 15.00, 30.99];


// // // 1. Create new array with prices converted to strings with $ prefix
// // const formattedPrices = prices.map((values) => {
// //     return `$${values}`
// // })

// // // console.log("Formatted prices:", formattedPrices);




// // // 2. Create new array with prices increased by 20%
// // const increasedPrices = prices.map((z) => {
// //     let increase = z * 20 / 100
// //     return z + increase
// // })
// // console.log("Increased prices:", increasedPrices);


// // // 3. Create new array that rounds each price to nearest dollar
// // const roundedPrices = prices.map(x => Math.round(x));
// // console.log("Rounded prices:", roundedPrices);




// // ****************************************************************************************


// // // Task: Practice using filter() method
// // const ages = [12, 18, 25, 16, 30, 14, 22];

// // // 1. Filter to get only adults (18 and above)
// // const adults = ages.filter(age => age > 18);
// // console.log("Adults:", adults);


// // // 2. Filter to get only minors (under 18)
// // const minors = ages.filter(age => age < 18);
// // console.log("Minors:", minors);


// // // 3. Filter to get ages between 15 and 25 (inclusive)
// // const youngAdults = ages.filter(a => a > 15 && a < 25);
// // console.log("Young adults:", youngAdults);



// // ****************************************************************************************

// // // Task: Practice array search methods
// // const inventory = ["laptop", "phone", "tablet", "watch", "headphones"];



// // // 1. Check if "phone" exists in inventory (use includes)
// // const hasPhone = inventory.includes("phone");
// // console.log("Has phone:", hasPhone);



// // // 2. Find the index of "tablet" (use indexOf)
// // const tabletIndex = inventory.indexOf("tablet");
// // console.log("Tablet index:", tabletIndex);


// // // 3. Check if any item starts with "h" (use some)
// // const startsWithH = inventory.some(num => num.startsWith("h"));
// // console.log("Has item starting with 'h':", startsWithH);


// // // 4. Find the first item with more than 5 characters (use find)
// // const longItem = inventory.find(y => y.length > 5);
// // console.log("First long item:", longItem);


// // ****************************************************************************************



// // // Task: Work with array of objects
// // const cart = [
// //     { name: "T-shirt", price: 25, quantity: 2 },
// //     { name: "Jeans", price: 60, quantity: 1 },
// //     { name: "Sneakers", price: 80, quantity: 1 },
// //     { name: "Hat", price: 15, quantity: 3 }
// // ];

// // // 1. Calculate total for each item (price * quantity)
// // const itemTotals = cart.map((each) => {
// //     return each.price * each.quantity
// // });
// // console.log("Item totals:", itemTotals);



// // // 2. Calculate grand total
// // const grandTotal = cart.map((total) => {
// //     let totalvalues = total.price * total.quantity
// //     return totalvalues
// // })
// // const finaltotal = grandTotal.reduce((v1, v2) => v1 + v2)
// // console.log("Grand total:", finaltotal);



// // // 3. Get items that cost more than $20 each
// // const expensiveItems = cart.filter(f => f.price > 20);
// // console.log("Expensive items:", expensiveItems);


// // // 4. Get just the names of all items
// // const itemNames = cart.map(n => n.name);
// // console.log("Item names:", itemNames);


// // ****************************************************************************************

// // // Task: Create objects with methods
// // const calculator = {
// //     result: 0,

// //     add: function (number) {
// //         this.result += number;
// //         return this;
// //     },

// //     subtract: function (number) {
// //         this.result -= number;
// //         return this;
// //     },

// //     multiply: function (number) {
// //         this.result *= number;
// //         return this;
// //     },

// //     getResult: function () {
// //         return this.result;
// //     },

// //     clear: function () {
// //         this.result = 0;

// //     }
// // };

// // // Test method chaining:
// // const finalResult = calculator.add(10).multiply(3).subtract(5).getResult();
// // console.log("Final result:", finalResult); // Expected: 25




// // ****************************************************************************************

// // Task: Build a mini library system


const library = {
    name: "City Library",
    books: [],

    addBook: function (title, author, isbn, year) {
        // Add a book object to the books array
        // Book should have: title, author, isbn, year, available (true by default)
        const book = {
            title: title,
            author: author,
            isbn: isbn,
            year: year,
            available: true
        };
        this.books.push(book);
        return book;
    },

    findBook: function (isbn) {
        // Find and return book by ISBN, or null if not found
        const book = this.books.find(book => book.isbn === isbn);
        return book || null;
    },

    borrowBook: function (isbn) {
        // Mark book as not available if found and available
        // Return success/failure message
        const book = this.findBook(isbn);
        if (!book) {
            return `Book with ISBN ${isbn} not found.`;
        }
        if (!book.available) {
            return `Book "${book.title}" is already borrowed.`;
        }
        book.available = false;
        return `You have successfully borrowed "${book.title}".`;
    },

    returnBook: function (isbn) {
        // Mark book as available if found
        // Return success/failure message
        const book = this.findBook(isbn);
        if (!book) {
            return `Book with ISBN ${isbn} not found.`;
        }
        if (book.available) {
            return `Book "${book.title}" was not borrowed.`;
        }
        book.available = true;
        return `You have successfully returned "${book.title}".`;
    },

    getAvailableBooks: function () {
        // Return array of available books
        return this.books.filter(book => book.available);
    },

    getBooksByAuthor: function (author) {
        // Return array of books by specific author
        return this.books.filter(a => a.author === author)
    }
};

// Test the library system:
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "978-0-7432-7356-5", 1925);
library.addBook("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4", 1960);
library.addBook("1984", "George Orwell", "978-0-452-28423-4", 1949);

console.log("Available books:", library.getAvailableBooks().length); // Expected: 3
console.log(library.borrowBook("978-0-7432-7356-5")); // Expected: success message
console.log("Available books:", library.getAvailableBooks().length); // Expected: 2
console.log(library.returnBook("978-0-7432-7356-5")); // Expected: success message
console.log("Available books:", library.getAvailableBooks().length); // Expected: 3


