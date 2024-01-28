function createGrid(rows=16, cols= 16) {
  // Creating a webpage with a 16*16 grid of square divs;
  const gridContainer = document.querySelector(".grid-container");
  const gridSize = getComputedStyle(gridContainer).width.replace("px", "");


  for(let i = 0; i <= rows; i++) {

    // Create a new row and append it to the grid...
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");
    
    //...then create n squares for each column and append each one to the row 
    for (let j = 0; j <= cols; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("square")
      
      // Adjust the square size dynamically 
      squareSize = adjustSquaresToGrid(gridSize, cols, "px");
      newSquare.style.width = newSquare.style.height = squareSize;
      newRow.appendChild(newSquare);
    }
    gridContainer.appendChild(newRow);
  }
}

function adjustSquaresToGrid(gridSize, squares, unit) {
  // To obtain a dynamic grid we need to make the squares size proportional to the container;
  const squareSize = (Math.round((gridSize / squares) * 10) / 10).toFixed(1);
  return squareSize + unit;
}

createGrid(100, 100);