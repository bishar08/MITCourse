let position = 1 // The starting position of the grid
const gridSize = 100 // The total number of the grid cells

function createGrid() {
  // Should create a new Div based on the gridSize variable value and and these divs to the element with id "target"
  for (i = 1; i < 100; i++) {
    let div = document.createElement('div')
    div.innerText = `${i}`
    div.id = 'target'
    div.className = 'content'
    document.getElementById('target').appendChild(div)
  }
}

function move() {
  // Should increment the position variable by 1 each 100ms taking into consideration the gridSize variable value
  // This function should make use of the toggle function below to change the CSS class on a specific div element
}

function toggle(position) {
  // Takes a position parameter referencing a grid cell and sets the class name of that cell (or div) to the class 'on'
  // The CSS class "on" is defined in the styles.css file
  const element = document.getElementById('target')
  element.classList.toggle('on')
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { createGrid, move, toggle }
}
