function createGrid(rows=16, cols= 16) {
  // Creating a webpage with a 16*16 grid of square divs;
  const gridContainer = document.querySelector(".grid-container");

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


createGrid();