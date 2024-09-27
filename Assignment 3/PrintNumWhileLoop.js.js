// print numbers from 1 to 10 using while loop
let counter = 1;

while (counter <= 10) {
    console.log(counter);
    counter++; 
}


//Repeatedly asks the user for input until they enter "stop".
function askUserForInput() {
    let input;
    do {
      input = prompt("Please enter something (or 'stop' to quit): ");
      console.log(`You entered: ${input}`);
    } while (input !== "stop");
    console.log("Bye!!");
  }
  
  askUserForInput();




