var TicTacToeStatus = function() {
  /*******************************************************************
  **************************Constants*********************************
  *******************************************************************/
  var _TICITACTOE_STATUS_EMPTY_CODE = 0;
  var _TICITACTOE_STATUS_PLAYER_CODE = 1;
  var _TICITACTOE_STATUS_CPU_CODE = 2;

  /*******************************************************************
  ******************************Init*********************************
  *******************************************************************/
   var i, j;
   this.gridValues = [];
   for(i = 0; i < 3; i++) {
     this.gridValues[i] = [];
     for(j = 0; j < 3; j++) {
        this.gridValues[i][j] = _TICITACTOE_STATUS_EMPTY_CODE;
     }
   }
   this.EMPTY = _TICITACTOE_STATUS_EMPTY_CODE;
   this.PLAYER = _TICITACTOE_STATUS_PLAYER_CODE;
   this.CPU = _TICITACTOE_STATUS_CPU_CODE;
}

TicTacToeStatus.prototype = function() {

   var _copyGrid = function() {
      var i, j;
      var copyGrid = [ [this.EMPTY, this.EMPTY, this.EMPTY],
                       [this.EMPTY, this.EMPTY, this.EMPTY],
                       [this.EMPTY, this.EMPTY, this.EMPTY]
                     ];
      for(i = 0; i < 3; i++) {
         for(j = 0; j < 3; j++) {
            copyGrid[i][j] = this.gridValues[i][j];
         }
      }
      return copyGrid;
   }

   //calc the score of a player in a row
   var _getRowValue = function(row, player, opponent) {
      var k;
      if(row < 3) {
         //check if there is opponent in the row
         for(k = 0; k < 3; k++) {
            //if there is one, the score is 0
            if(this.gridValues[row][k] === opponent) {
               return 0;
            }
         }
         //count the player elements
         var playerElements = 0;
         for(k = 0; k < 3; k++) {
            if(this.gridValues[row][k] === player) {
               playerElements++;
            }
         }
         return playerElements;
      } else {
         return 0;
      }
   }

   //calc the score of a player in a column
   var _getColumnValue = function(column, player, opponent) {
      var k;
      if(column < 3) {
         //check if there is opponent in the column
         for(k = 0; k < 3; k++) {
            //if there is one, the score is 0
            if(this.gridValues[k][column] === opponent) {
               return 0;
            }
         }
         //count the player elements
         var playerElements = 0;
         for(k = 0; k < 3; k++) {
            if(this.gridValues[k][column] === player) {
               playerElements++;
            }
         }
         return playerElements;
      } else {
         return 0;
      }
   }

   var _setGrid = function(grid) {
      var k, i, j;
      var checkSizeOk = true;

      if(grid.length === 3) {
         for(k = 0; k < 3; k++) {
            if(grid[k].length !== 3) {
               checkSizeOk = false;
            }
         }
      } else {
         checkSizeOk = false;
      }

      if(checkSizeOk) {
         for(i = 0; i < 3; i++) {
            for(j = 0; j < 3; j++) {
               this.gridValues[i][j] = grid[i][j];
            }
         }
      }
   }

   //calc the score of a player in a column
   var _getDiagonalValue = function(mainDiagonal, player, opponent) {
      var k;
      var playerElements;

      if(mainDiagonal) {
         //check if there is opponent in the diagonal
         for(k = 0; k < 3; k++) {
            //if there is one, the score is 0
            if(this.gridValues[k][k] === opponent) {
               return 0;
            }
         }
         //count the player elements
         playerElements = 0;
         for(k = 0; k < 3; k++) {
            if(this.gridValues[k][k] === player) {
               playerElements++;
            }
         }
         return playerElements;
      } else {
         //check if there is opponent in the diagonal
         for(k = 0; k < 3; k++) {
            //if there is one, the score is 0
            if(this.gridValues[k][2 - k] === opponent) {
               return 0;
            }
         }
         //count the player elements
         playerElements = 0;
         for(k = 0; k < 3; k++) {
            if(this.gridValues[k][2 - k] === player) {
               playerElements++;
            }
         }
         return playerElements;
      }
   }


   //get player score against opponent
   var _getPlayerValue = function(player, opponent) {
      var maxValue = 0;
      var k;
      //row search
      for(k = 0; k < 3; k++) {
         maxValue = Math.max( maxValue, _getRowValue.apply(this, [k, player, opponent]) );
      }
      //column search
      for(k = 0; k < 3; k++) {
         maxValue = Math.max( maxValue, _getColumnValue.apply(this, [k, player, opponent]) );
      }
      //diagonal search
      maxValue = Math.max( maxValue, _getDiagonalValue.apply(this, [true, player, opponent]) );
      maxValue = Math.max( maxValue, _getDiagonalValue.apply(this, [false, player, opponent]) );

      return maxValue;
   }

   //get value for a min max algorithm
   var _getValue = function(player, opponent) {
      var playerScore = _getPlayerValue.apply(this, [player, opponent]);
      var opponentScore = _getPlayerValue.apply(this, [opponent, player]);

      return playerScore - opponentScore;
   }

   var _childrenStatus = function(player) {
      var i, j;
      var newGrid;
      var result = [];
      var newTicTacToeStatus;
      //for each empty slot
      for(i = 0; i < 3; i++) {
         for(j = 0; j < 3; j++) {
            if(this.gridValues[i][j] === this.EMPTY) {
               //start a child from this point

               //copy the grid
               newGrid = _copyGrid.apply(this, [player]);
               newGrid[i][j] = player;
               //create new tictactoe status from the new grid
               newTicTacToeStatus = new TicTacToeStatus();
               newTicTacToeStatus.setGrid(newGrid);
               result.push(newTicTacToeStatus);
            }
         }
      }
      return result;
   }

   var _hasEmptySlot = function() {
      var i, j;
      for(i = 0; i < 3; i++) {
         for(j = 0; j < 3; j++) {
            if(this.gridValues[i][j] === this.EMPTY) {
               return true;
            }
         }
      }
      return false;
   }

   //check if it is an end status
   var _isEnd = function() {
      //game is over if some player has the score egual to 3 or there isn't empty slot
      return _getPlayerValue.apply(this, [this.PLAYER, this.CPU]) === 3 ||
               _getPlayerValue.apply(this, [this.CPU, this.PLAYER]) === 3 ||
                  !_hasEmptySlot.apply(this);
   }

   var _playerWon = function(player, opponent) {
      return _isEnd.apply(this) &&
                  _getPlayerValue.apply(this, [player, opponent]) === 3;
   }

   return {
      getPlayerValue: _getPlayerValue,
      getValue: _getValue,
      setGrid: _setGrid,
      getChildren: _childrenStatus,
      isEnd: _isEnd,
      playerWon: _playerWon
   }

}();
