let restart = document.querySelector("#b");
let squares = document.querySelectorAll("#square");


function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener("click", clearBoard);


function changeSquare() {
    if(this.textContent === ""){
      this.textContent = "X";

    }else if(this.textContent === "X"){
      this.textContent = "O";

    }else if(this.textContent === "O"){
      this.textContent = "";

    }
}

for (var squareCount = 0; squareCount < squares.length; squareCount++) {
  squares[squareCount].addEventListener("click", changeSquare)}
