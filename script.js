container = document.querySelector(".container");

for (let i=0; i<256; i++) {
    div = document.createElement("div");
    div.classList.add("tile");
    container.appendChild(div);
}

tiles = document.querySelectorAll(".tile");

for (const tile of tiles) {
    tile.addEventListener("mouseover", function () {
        tile.style.backgroundColor = "pink";
    }); 
    tile.addEventListener("mouseout", function () {
        tile.style.backgroundColor = "red";
    }); 
}