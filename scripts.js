document.addEventListener("DOMContentLoaded", function () {
    const tiles = document.querySelectorAll("#projects .tile");

    tiles.forEach(tile => {
        tile.addEventListener("click", function () {
            // Toggle the 'expanded' class on the clicked tile
            this.classList.toggle("expanded");

            // Toggle the display of description based on the 'expanded' class
            const description = this.querySelector(".tile-description");
            if (description) {
                description.style.opacity = this.classList.contains("expanded") ? "1" : "0";
            }
        });
    });
});
