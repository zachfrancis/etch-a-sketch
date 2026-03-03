function createBox() {
  const div = document.createElement("div");
  div.classList.add("pixel");
  return div;
}

function createRow(parent, length = 16) {
  const row = document.createElement("div");
  row.classList.add("row");
  row.style.display = "flex";
  for (let i = 0; i < length; i++) {
    const square = createBox();
    row.appendChild(square);
  }
  return row;
}

function createGrid(parent, dim = 16) {
  parent.style.display = "flex";
  parent.style.flexDirection = "column";
  for (let i = 0; i < dim; i++) {
    const row = createRow(parent, dim);
    parent.appendChild(row);
  }
}

const container = document.querySelector(".container");
createGrid(container);

pixels = document.querySelectorAll(".pixel");
for (const pixel of pixels) {
  pixel.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "black";
  });
}
