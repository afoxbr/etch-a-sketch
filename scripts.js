let container = document.querySelector('.container');

let gridSize = 16;

function sizeInput() {
    makeGrid();
}

makeGrid();

function makeGrid() {
  let gridSize = prompt("Please put in a number between 1 and 100");
  if (gridSize < 0 || gridSize > 100 || isNaN(gridSize)){
    for (let i = 1; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let k = 0; k < 16; k++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }
  }
  else {
    for (let i = 1; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let k = 0; k < gridSize; k++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }
  }
}

draw();

function draw() {
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
      columns[i].addEventListener("mouseover", changeColor);
    }
}

function changeColor() {
    this.style.backgroundColor = 'black';
}
