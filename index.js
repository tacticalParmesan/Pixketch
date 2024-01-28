// Getting global necessary references
const body = document.querySelector("body");
const gridContainer = document.querySelector(".grid-container");
const changeSizeButton = document.querySelector("#size-button");

function createGrid(rows=16, cols= 16) {
  // Create a grid with specified rows and columns; the grid ddisplay will be achieved by CSS though;
  for(let i = 0; i <= rows; i++) {

    // Create a new row and append it to the grid...
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");
    
    //...then create n squares for each column and append each one to the row 
    for (let j = 0; j <= cols; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("square")
      newRow.appendChild(newSquare);
    }
    gridContainer.appendChild(newRow);

    // Enable the drawing behaviour of squares
    drawByHovering();
  }
}

function drawByHovering() {
  // Change the background color of the squares by over over them to create a 
  // drawing illusion

  // Get every square in the string and attach an event listener to it
  const squares = gridContainer.querySelectorAll(".square");
  for (const square of squares) {
    square.addEventListener("mouseover", () => square.style.backgroundColor = "black");
  };
} 

function changeGridSize() {

  let newGridSize = 0;
  // Get the new grid size by prompting the user; limiting grid size to 100;
  while (true) {
    newGridSize = parseInt(prompt("Enter the new grid size:"));
    alert(newGridSize <= 100 ? "New grid generated!" : "Please enter a valid grid size (max 100).")

    // Validating user input
    if (newGridSize > 0 && newGridSize < 101) {
      break;
    } else {
      continue;
    }
  }
  // Remove the previous squares oof the grid and create a new one with given size;
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild); // It actually removes the rows;
  }
  createGrid(newGridSize, newGridSize);
};

// Web App execution
createGrid();
changeSizeButton.addEventListener("mousedown", changeGridSize);

