function testVarAndLet() {
    var x = 10;  
    let y = 20;

    // Print the values of x and y  
    console.log("x =", x);
    console.log("y =", y);
    // Create a block scope  
    {
        var x = 30;  
        let y = 40;
 
        console.log("Inside block scope:");      // Print the values of x and y inside the block scope 
        console.log("x =", x);
        console.log("y =", y);
    }
    console.log("Outside block scope:");         // Print the values of x and y outside the block scope  
    console.log("x =", x);
    console.log("y =", y);
}  
testVarAndLet();                             // Call the function


