const outerContainer = document.querySelector(".main-container");

const numOfCols = 16;
const numOfRows = 16;

function creategrid() {
    for (let i = 0; i < numOfCols; i++) {
        const newContainer = document.createElement("div");
        newContainer.classList.add(`inner-container${i}`);
      for (let j = 0; j < numOfRows; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add(`item`);
        newDiv.style.border = "1px solid black";
        newDiv.style.padding = "20px";
        newDiv.style.backgroundColor = "#eb2acb";
        newDiv.style.boxSizing = "border-box";
        newContainer.append(newDiv);
      }
      outerContainer.append(newContainer);
    }
}


function randomNum(max) {
  return Math.floor(Math.random() * (max - 0 + 1) + 0);
}


creategrid();

const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "blue";

        setTimeout(() => {
            item.style.backgroundColor = "#eb2acb";
        }, 500);
    });
});
