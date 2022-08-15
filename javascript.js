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

function createGrid(cellCount=64) { 
    const gridWrapper = document.querySelector('.grid-wrapper');

    for (let i = 1; i <= cellCount; i++) { 
        gridWrapper.appendChild(createDivCell(i));
    }
}

function createDivCell(cellNum) {  //returns a div

    const cell = document.createElement('div');
    cell.classList.add('grid-cell', `${cellNum}`);
    cell.textContent = `${cellNum}`;
    return cell;
}

function cellMouseoverHandler() {
    const gridCells = document.querySelectorAll('.grid-cell');
    
    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "green";
        });
    });
    }
    

//Main script
setGridWrapperSize(256);
createGrid(256);
cellMouseoverHandler();




