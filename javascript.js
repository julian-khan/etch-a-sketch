function createGrid(dimension) { 
    const gridWrapper = document.querySelector('.grid-wrapper');

    for (let i = 1; i <= dimension, i++) { 
        gridWrapper.appendChild(createDivCell(dimension));
}

function createDivCell(dimension) {  //returns a div

    const gridRow = document.createElement('div');
    gridRow.textContent = `Row ${i}`;
    return gridRow;
}