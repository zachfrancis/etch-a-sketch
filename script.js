function createPixel() {
  const div = document.createElement("div");
  div.classList.add("pixel");
  div.addEventListener("mouseenter", (event) => {
    let opacity = Number(event.target.style.opacity);
    opacity < 1 ? (opacity += 0.1) : opacity;
    event.target.style.opacity = opacity;
  });
  return div;
}

function createRow(parent, length) {
  const row = document.createElement("div");
  row.classList.add("row");
  row.style.display = "flex";
  for (let i = 0; i < length; i++) {
    const square = createPixel();
    row.appendChild(square);
  }
  return row;
}

function createGrid(parent, size = 16) {
  parent.style.display = "flex";
  parent.style.flexDirection = "column";
  for (let i = 0; i < size; i++) {
    const row = createRow(parent, size);
    parent.appendChild(row);
  }
}

function promptForGridSize() {
  let gridSize = Number(prompt("Enter grid size (Max: 100)"));
  if (isNaN(gridSize)) {
    gridSize = 24;
  } else if (gridSize > 100) {
    gridSize = 100;
  } else if (gridSize < 4) {
    gridSize = 4;
  }
  return gridSize;
}

function resetGrid() {
  size = promptForGridSize();
  const sketchpad = document.querySelector(".sketchpad");
  sketchpad.replaceChildren();
  createGrid(sketchpad, size);
}

const sketchpad = document.querySelector(".sketchpad");
createGrid(sketchpad);

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetGrid);
