function addd(a:number, b:number):number{return a+b};

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Example usage:
console.log("Addition: " + addd(5, 3)); // Output: Addition: 8
console.log("Subtraction: " + subtract(5, 3)); // Output: Subtraction: 2
console.log("Multiplication: " + multiply(5, 3)); // Output: Multiplication: 15
console.log("Division: " + divide(5, 3)); // Output: Division: 1.6666666666666667
