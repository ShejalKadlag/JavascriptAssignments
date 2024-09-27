// Converting a string to a number
let str = "123";
let num = Number(str);  // Using Number()

console.log("Converted number:", num);
console.log("Type of num:", typeof num);

// Define a function to convert a variable to a specified type
function convertType(variable, targetType) {
    // Check the type of the variable
    let currentType = typeof variable;

    if (currentType === targetType) {
        console.log(`Variable is already of type ${targetType}`);
        return variable;
    }

    // Convert the variable to the target type
    switch (targetType) {

        case "number":
            return parseInt(variable);
        case "string":
            return variable.toString();
        case "boolean":
            return Boolean(variable);
        default:
            console.log(`Unsupported target type: ${targetType}`);
            return null;
    }
}

// Test the function
let str1 = "42";
console.log(convertType(str1, "number")); // Output: 42

let num1 = 50;
console.log(convertType(num1, "string")); // Output: "50"

let bool = true;
console.log(convertType(bool, "string")); // Output: "true"
