document.addEventListener('DOMContentLoaded', function () {
    const tiles = document.querySelectorAll('#projects .tile, #publications .tile');

    tiles.forEach(tile => {
        tile.addEventListener('click', function () {
            if (this.classList.contains('expanded')) {
                this.classList.remove('expanded');
                this.style.maxHeight = '50px';
            } else {
                this.classList.add('expanded');
                const contentHeight = this.querySelector('.tile-content').scrollHeight;
                this.style.maxHeight = `${contentHeight + 40}px`; // Add some padding to ensure smooth transition
            }
        });
    });
});
