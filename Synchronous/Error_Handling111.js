function divideNumbers(a, b) {
    try {
        a = Number(a);
        b = Number(b);

        if (isNaN(a) || isNaN(b)) {
            throw new Error("Please enter valid numbers!");
        }

        if (b === 0) {
            throw new Error("You cannot divide by zero!");
        }

        let result = a / b;
        console.log(" Result:", result);
        return result;
    } catch (error) {

        console.log(" Error:", error.message);
    } finally {
        console.log("Division attempt finished.");
    }
}

divideNumbers("Hi", 2);

