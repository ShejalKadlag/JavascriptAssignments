//Create an array
let favoriteFruits = ['Apple', 'Banana', 'Mango'];

//add function
function addFruit(fruit) {
    favoriteFruits.push(fruit);
    console.log(`Added ${fruit} to the list!`);
}

//Remove function
function removeFruit(fruit) {
    const index = favoriteFruits.indexOf(fruit);
    if (index !== -1) {
        favoriteFruits.splice(index, 1);
        console.log(`Removed ${fruit} from the list!`);
    } else {
        console.log(`Fruit not found in the list!`);
    }
}

//Display function
function displayFruits() {
    console.log('Current Fruit List:');
    for (let i = 0; i < favoriteFruits.length; i++) {
        console.log(`  ${i + 1}. ${favoriteFruits[i]}`);
    }
}

addFruit('Orange');          // Add a new fruit
displayFruits();             // Display the updated list
removeFruit('Banana');       // Remove a fruit
displayFruits();             // Display the updated list