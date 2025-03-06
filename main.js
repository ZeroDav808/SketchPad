// Create the main container and append it to the body (if not already in HTML)
const Div = document.createElement("div");
Div.classList.add("container");
const outerContainer = document.querySelector(".main-container");
document.body.insertBefore(Div, outerContainer);

// Create the button
const btn = document.createElement("button");
btn.classList.add("btn");
btn.style.padding = "10px";
btn.style.border = "2px solid black";
btn.style.borderRadius = "5px";
btn.textContent = "Change size";

// Variables for grid size
let numOfCols = 16;
let numOfRows = 16;

Div.appendChild(btn)

function creategrid(x, y) {
  const squareWidth = 500 / x;
  const squareHeight = 500 / y;

  // Create the grid of squares
  for(let i = 0; i < x * y; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.style.width = `${squareWidth}px`;
    newDiv.style.height = `${squareHeight}px`;
    newDiv.style.border = "1px solid black";
    newDiv.style.backgroundColor = "#eb2acb";
    outerContainer.appendChild(newDiv);
  }

  // Add event listeners for hover effect
  addEventListenerToItems();
}

function addEventListenerToItems() {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "blue";

      setTimeout(() => {
        item.style.backgroundColor = "#eb2acb";
      }, 10000);
    });
  });
}

// Function to change grid size
function changeSize() {
  let input = prompt("Enter the length of the side of the grid: ");
  input = Number(input);
  if (input != null && input < 100 && input > 0) {
    numOfCols = input;
    numOfRows = input;

    // Clear the existing grid
    while (outerContainer.firstChild) {
      outerContainer.removeChild(outerContainer.firstChild);
    }

    // Re-add the button to the top
    Div.appendChild(btn);

    // Create a new grid with updated size
    creategrid(numOfCols, numOfRows);
  } else {
    console.log("Invalid input!");
  }
}

// Button click event listener
btn.addEventListener("click", changeSize);

// Initial grid creation
creategrid(numOfCols, numOfRows);
