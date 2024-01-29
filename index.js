// Getting global necessary references
const body = document.querySelector("body");

// This one is not a constant because it is constantly being
// cloned and replace while switching modes;
let gridContainer = document.querySelector(".grid-container");

// Buttons present on the UI
const changeSizeButton = document.querySelector(".size");
const changeModeButton = document.querySelector(".change-mode");

// Check for current drawing mode and a bool to let draw by click and hover;
let drawMode = "Click"; // Default mode is click
let isDrawing = false; 

// Start the app when the window is loaded;
window.onload(initializeApp());

// --------- FUNCTIONALITIES ----------

function initializeApp() {
  // Web App's first execution, call basic functions and grab necessary references
  createGrid();
  draw();
  changeSizeButton.addEventListener("mousedown", changeGridSize);
  changeModeButton.addEventListener("mousedown", setDrawMode);
}

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
  }
}

function draw() {
  if (drawMode === "Sketch") {
    drawByHovering();
  } 
  
  else if (drawMode === "Click") {
    drawByClicking();
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

function drawByClicking() {
  // Change the background color of the squares by clicking and hovering at the same time

  // Get every square in the string and attach a mousedown listener to it
  const squares = gridContainer.querySelectorAll(".square");
  for (const square of squares) {

    //Since we are goin to click and hover, prevent the drag behaviour from happening!
    square.addEventListener("dragstart", (e) => e.preventDefault());

    // Two event listeners to higlight the square on mouse passing
    square.addEventListener("mouseover", () => square.style.border = "1px solid black");
    square.addEventListener("mouseout", () => square.style.border = "none");

    // The effective drawing, when mouse is down and the drawing behaviour is enabled, stop when
    // leaving the mouse button.
    square.addEventListener("mousedown", (e) => {
      if (e.button === 0) {  // Draw only with the left mouse button! 
        isDrawing = true;
        square.style.backgroundColor = "black";  
      }
  });
    square.addEventListener("mouseup", (e) => isDrawing = false);
    square.addEventListener("mouseover", () => {
      if (isDrawing) {
        square.style.backgroundColor = "black";
      }
    });
  };
}; 

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

function toggleGridView() {
  // TODO
}

function setDrawMode() {
  cloneGrid(); // Clears of every event listener
  
  if (drawMode === "Sketch") {
    drawMode = "Click";
  } else if (drawMode === "Click") {
    drawMode = "Sketch";
  }
  changeModeButton.textContent = "Mode: " + drawMode;
  draw();
}

function cloneGrid() {
  // To be called to "clear" every square of all event listeners;
  const clonedGrid = gridContainer.cloneNode(true);
  gridContainer.replaceWith(clonedGrid);
  gridContainer = clonedGrid;
}



