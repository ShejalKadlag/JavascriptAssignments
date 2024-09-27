// button element
const changeColorBtn = document.getElementById('change-color-btn');

// Define a function to change the background color
function changeBackgroundColor() {
  // Generate a random color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // Set the background color of the body element
  document.body.style.backgroundColor = randomColor;
}

// Add an event listener to the button
changeColorBtn.addEventListener('click', changeBackgroundColor);