const container = document.querySelector('.container');




// Create the grid
function createGrid(num){
  if(num>100){
    return 'Error';
  }
  for(let i = 0; i<num; i++){

    const row = document.createElement('div');
    row.classList.add('row');
    for(let j =0; j<num; j++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

//hover effect
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = 'red';
  });

  cell.addEventListener('mouseout', () => {
    cell.style.backgroundColor = '';
  });
});


// Button event handle
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  const numOfCells = parseInt(prompt('Input the number of squares per side for the new grid'));
  createGrid(numOfCells);


});
