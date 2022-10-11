let socket = io();
let counter = 0;
let boxs = document.querySelectorAll('.boxs')

boxs.forEach((box) => {
  box.addEventListener('click', () => {
    if (!box.classList.contains('checked')) {
      counter++;
      socket.emit('play', box.id, counter);
    }
  });

  socket.on('play', (id, counter) => {

    if (id === box.id) {
      box.classList.add('checked');
      if (counter % 2 === 0) {
        box.classList.add('square');
      } else {
        box.classList.add('cross');
      }
    }

  })
});

// var symbol;
// var myTurn;

// document.querySelector(".board button").getAttribute("disabled", true);
// document.querySelectorAll(".board button").forEach(el => {
//   el.addEventListener("click", makeMove);
// })

// // Event is called when either player makes a move
// socket.on("move.made", function (data) {
//   console.log(data);
//   // Render the move
//   $("#" + data.position).text(data.symbol);
//   // If the symbol is the same as the player's symbol,
//   // we can assume it is their turn

//   myTurn = data.symbol !== symbol;

//   // If the game is still going, show who's turn it is
//   if (!isGameOver()) {
//     if (gameTied()) {
//       $("#messages").text("Game Drawn!");
//       $(".board button").attr("disabled", true);
//     } else {
//       renderTurnMessage();
//     }
//     // If the game is over
//   } else {
//     // Show the message for the loser
//     if (myTurn) {
//       $("#messages").text("Game over. You lost.");
//       // Show the message for the winner
//     } else {
//       $("#messages").text("Game over. You won!");
//     }
//     // Disable the board
//     $(".board button").attr("disabled", true);
//   }
// });

// // Set up the initial state when the game begins
// socket.on("game.begin", function (data) {
//   // The server will asign X or O to the player
//   symbol = data.symbol;
//   // Give X the first turn
//   myTurn = symbol === "X";
//   renderTurnMessage();
// });

// // // Disable the board if the opponent leaves
// // socket.on("opponent.left", function () {
// //   $("#messages").text("Your opponent left the game.");
// //   $(".board button").attr("disabled", true);
// // });

var nombreCoups = 0;
var joueur = 'X'
var boxBtn = document.querySelectorAll('.boxs')

function cliquer(id){
  var btn = document.getElementById(id);

  btn.innerText = joueur;

  if (joueur === 'X') {
      joueur = 'O';
  }else{
      joueur = 'X';
  }

  btn.disabled = true;

  document.getElementById('message').innerText = 'Au tour du joueur : ' + joueur;
  verifGagnant();
}

function verifGagnant() {
  if (
    document.getElementById('1').innerText === document.getElementById('2').innerText &&
    document.getElementById('2').innerText === document.getElementById('3').innerText &&
    document.getElementById('1').innerText !== ''
  ) {
    document.getElementById('message').innerText = 'Gagné !'
    boxBtn.forEach(box => {
      box.disabled = true;
    })
  }
  else if (
    document.getElementById('4').innerText === document.getElementById('5').innerText &&
    document.getElementById('5').innerText === document.getElementById('6').innerText &&
    document.getElementById('4').innerText !== ''
  ) {
    document.getElementById('message').innerText = 'Gagné !'
    boxBtn.forEach(box => {
      box.disabled = true;
    })
  }
  else if (
    document.getElementById('7').innerText === document.getElementById('8').innerText &&
    document.getElementById('8').innerText === document.getElementById('9').innerText &&
    document.getElementById('7').innerText !== ''
  ) {
    document.getElementById('message').innerText = 'Gagné !'
    boxBtn.forEach(box => {
      box.disabled = true;
    })
  }
  else if (
    document.getElementById('1').innerText === document.getElementById('4').innerText &&
    document.getElementById('4').innerText === document.getElementById('7').innerText &&
    document.getElementById('1').innerText !== ''
  ) {
    document.getElementById('message').innerText = 'Gagné !'
    console.log(document.querySelectorAll('.boxs'));
    boxBtn.forEach(box => {
      box.disabled = true;
    })
  }
  else if (
    document.getElementById('2').innerText === document.getElementById('5').innerText &&
    document.getElementById('5').innerText === document.getElementById('8').innerText &&
    document.getElementById('2').innerText !== ''
  ) {
    document.getElementById('message').innerText = 'Gagné !'
    boxBtn.forEach(box => {
      box.disabled = true;
    })
  }
  else if (
    document.getElementById('3').innerText === document.getElementById('6').innerText &&
    document.getElementById('6').innerText === document.getElementById('9').innerText &&
    document.getElementById('3').innerText !== ''
  ) {
    document.getElementById('message').innerText = 'Gagné !'
    boxBtn.forEach(box => {
      box.disabled = true;
    })
  }
  else if (
    document.getElementById('1').innerText === document.getElementById('5').innerText &&
    document.getElementById('5').innerText === document.getElementById('9').innerText &&
    document.getElementById('1').innerText !== ''
  ) {
    document.getElementById('message').innerText = 'Gagné !'
    boxBtn.forEach(box => {
      box.disabled = true;
    })
  }
  else if (
    document.getElementById('3').innerText === document.getElementById('5').innerText &&
    document.getElementById('5').innerText === document.getElementById('7').innerText &&
    document.getElementById('3').innerText !== ''
  ) {
    document.getElementById('message').innerText = 'Gagné !'
    boxBtn.forEach(box => {
      box.disabled = true;
    })
  }

}

document.querySelectorAll('.boxs').forEach(function (element) {
  element.addEventListener('click', function () {
    nombreCoups++;
    if (nombreCoups >= 9) {
      document.getElementById('message').innerText = 'Match nul !'
    }
  })
})

// function renderTurnMessage() {
// //   // Disable the board if it is the opponents turn
// //   if (!myTurn) {
// //     $("#messages").text("Your opponent's turn");
// //     $(".board button").attr("disabled", true);
// //     // Enable the board if it is your turn
// //   } else {
// //     $("#messages").text("Your turn.");
// //     $(".board button").removeAttr("disabled");
// //   }
// // }

// function makeMove(e) {
//   console.log(e.preventDefault);
//   e.preventDefault();
//   // It's not your turn
//   if (!myTurn) {
//     return;
//   }
//   // The space is already checked
//   if ($(this).text().length) {
//     return;
//   }

//   // Emit the move to the server
//   socket.emit("make.move", {
//     symbol: symbol,
//     position: $(this).attr("id"),
//   });
// }
