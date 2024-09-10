container = document.querySelector(".container");
container.style.width = "75vh";

function createGrid(blocks) {
    let sizeSpace = blocks*0.05*2;
    let remaining = 75-sizeSpace;
    let height = remaining/blocks;

    for (let i=0; i<blocks*blocks; i++) {
        div = document.createElement("div");
        div.classList.add("tile");
        div.style.height = `${height}vh`;
        div.style.width = `${height}vh`;
        container.appendChild(div);
    }

    tiles = document.querySelectorAll(".tile");

    for (const tile of tiles) {
        tile.dataset.overlayOpacity = 0.1;
        tile.addEventListener("mouseover", function () {
            tile.style.backgroundColor = "#fdc3c3";
        }); 
        tile.addEventListener("mouseout", function () {
            let opacity = parseFloat(tile.dataset.overlayOpacity) || 0;
            tile.style.backgroundColor = `rgb(0, 0, 255, ${tile.dataset.overlayOpacity})`;
            if (tile.dataset.overlayOpacity<1) {
                opacity += 0.1
                tile.dataset.overlayOpacity = opacity;
            }
        }); 
    }
}

function delGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

button = document.querySelector("button");
button.addEventListener("click", function () {
    let numOfBlocks = prompt("How long should it be? (between 1 & 100)");
    while (numOfBlocks<1 || numOfBlocks>100 || isNaN(numOfBlocks)) {
        numOfBlocks = prompt("Sorry, it needs to be between 1 & 100.");
    }
    delGrid();
    createGrid(numOfBlocks);
});


createGrid(16);