const squares = document.querySelectorAll(".square");
let currentPlayer = "X";

squares.forEach(square => {
    square.addEventListener("click", function (e) {
        if (e.target.textContent === "") {
            e.target.textContent = currentPlayer;
            checkWinningConditions();
            switchPlayer();
        }
    });
});

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}


function checkWinningConditions() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    winningCombinations.forEach(combination => {
        const [a, b, c] = combination;
        if (
            squares[a].textContent === currentPlayer &&
            squares[b].textContent === currentPlayer &&
            squares[c].textContent === currentPlayer
        ) {
            alert(`Player ${currentPlayer} has won!`);
        }
    });
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
    squares.forEach(square => (square.textContent = ""));
    currentPlayer = "X";
});





function resetBoard() {
    squares.forEach(square => {
        square.textContent = "";
    });
    winner
}
