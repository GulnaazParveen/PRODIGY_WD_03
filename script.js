
const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX"),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll("section span"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");


window.onload = ()=>{
    for (let i = 0; i < allBox.length; i++) {
       allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}

selectBtnX.onclick = ()=>{
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
}

selectBtnO.onclick = ()=>{ 
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");
}
document.addEventListener('DOMContentLoaded', () => {
    
    const playerX = 'X';
    const playerO = 'O';
    let currentPlayer = playerX;
    const boxes = document.querySelectorAll('.play-area span');
    const players = document.querySelectorAll('.players span');
  
    // Function to check for a winner
    const checkWinner = () => {
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
          return boxes[a].innerText;
        }
      }
  
      return null;
    };
  
    // Function to check for a draw
    const checkDraw = () => {
      return [...boxes].every(box => box.innerText !== '');
    };
  
    // Function to handle player click
    const handleClick = (e) => {
      const box = e.target;
      if (box.innerText === '') {
        box.innerText = currentPlayer;
        if (checkWinner()) {
          showResult(`${currentPlayer} wins!`);
        } else if (checkDraw()) {
          showResult("It's a draw!");
        } else {
          currentPlayer = currentPlayer === playerX ? playerO : playerX;
          updateTurn();
        }
      }
    };
  
    // };
    const updateTurn = () => {
      const slider = document.querySelector('.slider');
      const playerX = document.querySelector('.Xturn');
      const playerO = document.querySelector('.Oturn');
  
      if (playerX.classList.contains('active')) {
          slider.style.left = '0';
      } else if (playerO.classList.contains('active')) {
          slider.style.right = '50% ' ; 
      }
  };
  
    // Function to display result
    const showResult = (message) => {
      const resultBox = document.querySelector('.result-box');
      const wonText = document.querySelector('.won-text');
      wonText.textContent = message;
      resultBox.classList.add('show');
    };
  
    // Function to reset the game
    const resetGame = () => {
      boxes.forEach(box => box.innerText = '');
      currentPlayer = playerX;
      players.forEach(player => player.classList.remove('active'));
      players[0].classList.add('active');
      document.querySelector('.result-box').classList.remove('show');
    };
  
    // Add click event listeners to each box
    boxes.forEach(box => box.addEventListener('click', handleClick));
  
    // Add click event listener to replay button
    document.querySelector('.result-box button').addEventListener('click', resetGame);
  });
  

 