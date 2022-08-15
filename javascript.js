
function setGridWrapperSize(cellCount) {
    const gridWrapper = document.querySelector('.grid-wrapper');

    //gridWrapper.setAttribute("grid-template-columns", "1fr 1fr;");
    const gridTempColStr = createGridTempColString(cellCount);
    gridWrapper.style.gridTemplateColumns = `${gridTempColStr()}`;

    console.log(gridWrapper);
}

function createGridTempColString(cellCount) {

}

function createGrid(cellCount=64) { 
    const gridWrapper = document.querySelector('.grid-wrapper');

    for (let i = 1; i <= cellCount; i++) { 
        gridWrapper.appendChild(createDivCell(i));
    }
}


function createDivCell(cellNum) {  //returns a div

    const cell = document.createElement('div');
    cell.classList.add(`${cellNum}`);
    cell.textContent = `${cellNum}`;
    return cell;
}

setGridWrapperSize(64);


console.log(createGrid(64));