document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const resetButton = document.getElementById("resetButton");

    function createGrid(size) {
        container.innerHTML = ''; // Clear existing grid
        const squareSize = 700/ size;
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'lightblue';
            });
            container.appendChild(square);
        }
    }

    function setGridSize() {
        let size = parseInt(prompt("Enter the number of squares per side (maximum 100):"));
        if (size > 100) {
            alert("Maximum size is 100");
            size = 100;
        } else if (size < 1 || isNaN(size)) {
            alert("Invalid input, setting grid size to 16");
            size = 16;
        }
        createGrid(size);
    }

    createGrid(16); // Initial 16x16 grid

    resetButton.addEventListener("click", setGridSize);
});
