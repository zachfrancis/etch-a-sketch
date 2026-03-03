function createBox() {
  const div = document.createElement("div");
  div.classList.add("square");
  div.style.border = "1px solid black";
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.margin = "10px";
  return div;
}

function createRow(parent, length = 4) {
  const row = document.createElement("div");
  row.classList.add("row");
  row.style.display = "flex";
  for (let i = 0; i < length; i++) {
    const square = createBox();
    row.appendChild(square);
  }
  parent.appendChild(row);
}

function createGrid(parent, dim = 4) {
  parent.style.display = "flex";
  parent.style.flexDirection = "column";
  for (let i = 0; i < dim; i++) {
    createRow(parent, dim);
  }
}

const container = document.querySelector(".container");
createGrid(container);
