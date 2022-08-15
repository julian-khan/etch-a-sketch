function createGrid(cellCount=64) { 
    const gridWrapper = document.querySelector('.grid-wrapper');

    for (let i = 1; i <= cellCount, i++) { 
        gridWrapper.appendChild(createDivCell(i));
}

function createDivCell(cellNum) {  //returns a div

    const gridRow = document.createElement('div');
    gridRow.textContent = `${i}`;
    return gridRow;
}