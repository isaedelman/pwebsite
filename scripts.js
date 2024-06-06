document.addEventListener('DOMContentLoaded', function () {
    const tiles = document.querySelectorAll('#projects .tile, #publications .tile');

    tiles.forEach(tile => {
        tile.addEventListener('click', function () {
            this.classList.toggle('expanded');
        });
    });
});
