
function setGridWrapperSize(cellCount) {
    const gridWrapper = document.querySelector('.grid-wrapper');

    const gridTempColStr = createGridTempColString(cellCount);
    gridWrapper.style.gridTemplateColumns = gridTempColStr;
}


function createGridTempColString(cellCount) {

    const rowLength = Math.sqrt(cellCount);
    let outputString = "";

    for (i=0; i<= rowLength -1; i++) {
        outputString += " 1fr";
    }
    return outputString;
}

console.log(createGridTempColString(64));

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

setGridWrapperSize(100);


createGrid(100);