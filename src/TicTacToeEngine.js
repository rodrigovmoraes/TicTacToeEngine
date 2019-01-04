var TicTacToeEngine = function() {
   this.status = new TicTacToeStatus();
   this.listener = null;
}

TicTacToeEngine.prototype = (function() {

   var _playerPlay = function(row, column) {
      if (row < 3 && column < 3 && row >= 0 && column >= 0) {
          if(!this.status.isEnd()) {
             if(this.status.gridValues[row][column] === this.status.EMPTY) {
                this.status.gridValues[row][column] = this.status.PLAYER;
                if (this.listener) {
                   this.listener.update(this.status);
                }
                _cpuPlay.apply(this);
             }
          }
      }
      return this.status.gridValues;
   }

   var _cpuPlay = function() {
      var i;
      var statusChildren;
      var value;
      var minMax;
      var minValue = Number.POSITIVE_INFINITY;
      var minValueIndex = -1;
      var minMaxResult;

      minMax = new MinMax();
      minMax.setStatus(this.status);
      minMaxResult = minMax.getValue(this.status.CPU, this.status.PLAYER);
      this.status = minMaxResult.status;
      if (this.listener) {
         this.listener.update(minMaxResult.status);
      }
   }

   var _isEnd = function() {
      return this.status ? this.status.isEnd() : false;
   }

   var _playerWon = function() {
      return this.status
               ? this.status.playerWon(this.status.PLAYER, this.status.CPU)
               : false;
   }

   var _cpuWon = function() {
      return this.status
               ? this.status.playerWon(this.status.CPU, this.status.PLAYER)
               : false;
   }

   /******************************************
   *******************public******************
   ******************************************/
   return {
      cpuPlay: _cpuPlay,
      play: _playerPlay,
      isEnd: _isEnd,
      playerWon: _playerWon,
      cpuWon: _cpuWon
   }
}());
