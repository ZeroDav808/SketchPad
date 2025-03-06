const outerContainer = document.querySelector(".main-container");

function createGrid() {
    const numOfCols = 16;
    const numOfRows = 16;

    for(let i = 0; i < numOfCols; i++){
        const newContainer = document.createElement("div");
        newContainer.classList.add(`inner-container${i}`);
        for(let j = 0; j < numOfRows; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add(`item${j}`);
            newDiv.style.border = "2px solid black";
            newDiv.style.padding = "20px";
            newDiv.style.backgroundColor = "#eb2acb";
            newDiv.style.boxSizing = "border-box";
            newContainer.append(newDiv);
        }
        outerContainer.append(newContainer);
    }
}

createGrid();