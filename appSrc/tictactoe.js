var circle = true;

var mouseClicked = function(tictactoeCanvas, tictactoeCanvasElement, row, col) {
	if (circle) {
		drawCircle(tictactoeCanvas, tictactoeCanvasElement, row, col);
	} else {
		drawX(tictactoeCanvas, tictactoeCanvasElement, row, col);
	}
	circle = !circle;
}

var clear = function(tictactoeCanvas, tictactoeCanvasElement) {
   var TICTACTOE_BACKGROUND_COLOR = '#FFFFFF';
	var TICTACTOE_LINES_COLOR = '#000000';

   tictactoeCanvas.fillStyle = TICTACTOE_BACKGROUND_COLOR;
	tictactoeCanvas.fillRect(0, 0, tictactoeCanvasElement.width, tictactoeCanvasElement.height);

	tictactoeCanvas.beginPath();
	tictactoeCanvas.moveTo(0, tictactoeCanvasElement.height / 3);
	tictactoeCanvas.lineTo(tictactoeCanvasElement.width,tictactoeCanvasElement.height/3);
	tictactoeCanvas.strokeStyle = TICTACTOE_LINES_COLOR;
	tictactoeCanvas.stroke();

	tictactoeCanvas.beginPath();
	tictactoeCanvas.moveTo(0, 2 * tictactoeCanvasElement.height / 3);
	tictactoeCanvas.lineTo(tictactoeCanvasElement.width, 2 * tictactoeCanvasElement.height/3);
	tictactoeCanvas.strokeStyle = TICTACTOE_LINES_COLOR;
	tictactoeCanvas.stroke();

	tictactoeCanvas.beginPath();
	tictactoeCanvas.moveTo(tictactoeCanvasElement.width / 3, 0);
	tictactoeCanvas.lineTo(tictactoeCanvasElement.width / 3, tictactoeCanvasElement.height);
	tictactoeCanvas.strokeStyle = TICTACTOE_LINES_COLOR;
	tictactoeCanvas.stroke();

	tictactoeCanvas.beginPath();
	tictactoeCanvas.moveTo(2 * tictactoeCanvasElement.width / 3, 0);
	tictactoeCanvas.lineTo(2 * tictactoeCanvasElement.width / 3, tictactoeCanvasElement.height);
	tictactoeCanvas.strokeStyle = TICTACTOE_LINES_COLOR;
	tictactoeCanvas.stroke();
}


var drawCircle = function(tictactoeCanvas, tictactoeCanvasElement, row, col) {
	tictactoeCanvas.beginPath();
	var radius = Math.min(tictactoeCanvasElement.height / 10, tictactoeCanvasElement.width / 10);
    tictactoeCanvas.arc( row * tictactoeCanvasElement.height / 3 + tictactoeCanvasElement.height / 6,
	                     col * tictactoeCanvasElement.width / 3 + tictactoeCanvasElement.width / 6, radius, 0, 2 * Math.PI, true);
    tictactoeCanvas.fillStyle = '#FF6A6A';
    tictactoeCanvas.fill();
}

var drawX = function(tictactoeCanvas, tictactoeCanvasElement, row, col) {
	var radius = Math.min(tictactoeCanvasElement.height / 10, tictactoeCanvasElement.width / 10);

	tictactoeCanvas.beginPath();
	tictactoeCanvas.moveTo( row * tictactoeCanvasElement.height / 3 + tictactoeCanvasElement.height / 6 - radius,
	                        col * tictactoeCanvasElement.width / 3 + tictactoeCanvasElement.width / 6 - radius);
	tictactoeCanvas.lineTo( row * tictactoeCanvasElement.height / 3 + tictactoeCanvasElement.height / 6 + radius,
	                        col * tictactoeCanvasElement.width / 3 + tictactoeCanvasElement.width / 6 + radius);
	tictactoeCanvas.strokeStyle = "green";
	tictactoeCanvas.lineWidth = 4;
	tictactoeCanvas.stroke();

	tictactoeCanvas.beginPath();
	tictactoeCanvas.moveTo( row * tictactoeCanvasElement.height / 3 + tictactoeCanvasElement.height / 6 - radius,
	                        col * tictactoeCanvasElement.width / 3 + tictactoeCanvasElement.width / 6 + radius);
	tictactoeCanvas.lineTo( row * tictactoeCanvasElement.height / 3 + tictactoeCanvasElement.height / 6 + radius,
	                        col * tictactoeCanvasElement.width / 3 + tictactoeCanvasElement.width / 6 - radius);
	tictactoeCanvas.strokeStyle = "green";
	tictactoeCanvas.lineWidth = 4;
	tictactoeCanvas.stroke();
}

var update = function(ticTacToeStatus, tictactoeCanvas, tictactoeCanvasElement) {
   var i, j;
   clear(tictactoeCanvas, tictactoeCanvasElement);
   if(ticTacToeStatus && ticTacToeStatus.gridValues) {
      for (i = 0; i < 3; i++) {
         for(j = 0; j < 3; j++) {
            if(ticTacToeStatus.gridValues[i][j] !== ticTacToeStatus.EMPTY) {
               if (ticTacToeStatus.gridValues[i][j] === ticTacToeStatus.PLAYER) {
                  drawX(tictactoeCanvas, tictactoeCanvasElement, i, j);
               } else if (ticTacToeStatus.gridValues[i][j] === ticTacToeStatus.CPU) {
                  drawCircle(tictactoeCanvas, tictactoeCanvasElement, i, j);
               }
            }
         }
      }
   }
}

var hiddenWhoPlayFirst = function() {
   document.getElementById("whoPlayFirst").remove();
}

var setGameplay = function(playerPlayFirst) {
   var tictactoeCanvasElement = document.getElementById("tictactoeCanvas");
	var tictactoeCanvas = tictactoeCanvasElement.getContext("2d");
   var tictactoeEngine = new TicTacToeEngine();

   tictactoeEngine.listener = {
      update: function(ticTacToeStatus) {
         update(ticTacToeStatus, tictactoeCanvas, tictactoeCanvasElement);
      }
   }

   clear(tictactoeCanvas, tictactoeCanvasElement);

   if (!playerPlayFirst) {
      tictactoeEngine.cpuPlay();
   }

	tictactoeCanvasElement.addEventListener('click', function(event) {
		var x = event.pageX - tictactoeCanvasElement.offsetLeft;
		var y = event.pageY - tictactoeCanvasElement.offsetTop;

		var col = 0;
		var row = 0;

		if (x <= tictactoeCanvasElement.height/ 3) {
			row = 0;
		} else if (x <= 2 * tictactoeCanvasElement.height / 3) {
			row = 1;
		} else {
			row = 2;
		}

		if (y <= tictactoeCanvasElement.width  / 3) {
			col = 0;
		} else if (y <= 2 * tictactoeCanvasElement.width  / 3) {
			col = 1;
		} else {
			col = 2;
		}
      tictactoeEngine.play(row, col);
      if (tictactoeEngine.playerWon()) {
         document.getElementById("message").style.textAlign = "center";
         document.getElementById("message").innerHTML = "Você ganhou!!!";
         document.getElementById("message").style.color = 'green';
         document.getElementById("message").style.visibility = 'visible';
      } else if (tictactoeEngine.cpuWon()) {
         document.getElementById("message").style.textAlign = "center";
         document.getElementById("message").innerHTML = "Você perdeu!!!";
         document.getElementById("message").style.color = 'red';
         document.getElementById("message").style.visibility = 'visible';
      } else if (tictactoeEngine.isEnd()) {
         document.getElementById("message").style.textAlign = "center";
         document.getElementById("message").innerHTML = "Empatou!!!";
         document.getElementById("message").style.color = 'orange';
         document.getElementById("message").style.visibility = 'visible';
      }
    });
}

document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("cpuButtonClicked")
           .addEventListener('click', function(event) {
             hiddenWhoPlayFirst();
             setGameplay(false);
   });
   document.getElementById("playerButtonClicked")
           .addEventListener('click', function(event) {
             hiddenWhoPlayFirst();
             setGameplay(true);
   });
});
