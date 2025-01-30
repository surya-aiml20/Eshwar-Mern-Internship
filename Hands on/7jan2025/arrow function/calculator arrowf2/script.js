// Arrow function for addition
const add = (a, b) => a + b;

// Arrow function for subtraction
const subtract = (a, b) => a - b;

// Arrow function for multiplication
const multiply = (a, b) => a * b;

// Arrow function for division
const divide = (a, b) => {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
};

// Arrow function for modulus
const modulus = (a, b) => {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a % b;
};

// Prompt user for input
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Calculate results
const addition = add(num1, num2);
const subtraction = subtract(num1, num2);
const multiplication = multiply(num1, num2);
const division = typeof divide(num1, num2) === "number" ? divide(num1, num2).toFixed(2) : divide(num1, num2); // Only division rounded
const mod = modulus(num1, num2);

// Display results in the browser
document.body.innerHTML = `
    <h1>Simple Calculator Results</h1>
    <p>Addition: ${addition}</p>
    <p>Subtraction: ${subtraction}</p>
    <p>Multiplication: ${multiplication}</p>
    <p>Division: ${division}</p>
    <p>Modulus: ${mod}</p>
`;
