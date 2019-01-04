describe('TicTacToeEngineTest', () => {

   var _gridValuesGetPlay = function(player, parentStatus, childStatus) {
      var i, j;
      for(i = 0 ; i < 3; i++) {
         for(j = 0 ; j < 3; j++) {
            if ( parentStatus.gridValues[i][j] === parentStatus.EMPTY &&
                 childStatus.gridValues[i][j] === player ) {
                    return [i, j];
            }
         }
      }
      return null;
   }

   describe('#play()', () => {

      var ticTacToeEngine;

      beforeEach(function() {
        ticTacToeEngine = new TicTacToeEngine();
      });

      it('play tic tac toe, player begins', () => {
         var randomPlay;
         var plays;
         expect(ticTacToeEngine).to.not.be.null;
         var play;
         var cpuWonCount = 0;
         var playerWonCount = 0;
         var drawCount = 0;
         var playTimes = 50;
         var k;
         var count;
         for(k = 0; k < playTimes; k++) {
            count = 0;
            while(!ticTacToeEngine.isEnd() && count < 5) {
               count++;
               plays = ticTacToeEngine.status.getChildren(ticTacToeEngine.status.PLAYER);
               expect(plays).to.not.be.null;
               expect(plays.length > 0).to.equal(true);
               randomPlay = plays[Math.floor((Math.random() * plays.length))];
               play =  _gridValuesGetPlay(ticTacToeEngine.status.PLAYER, ticTacToeEngine.status, randomPlay);
               expect(play).to.not.be.null;
               expect(play[0] >= 0).to.equal(true);
               expect(play[0] < 3).to.equal(true);
               expect(play[1] >= 0).to.equal(true);
               expect(play[1] < 3).to.equal(true);
               ticTacToeEngine.play(play[0], play[1]);
            }
            expect(ticTacToeEngine.isEnd()).to.equal(true);
            if(ticTacToeEngine.playerWon()) {
               playerWonCount++;
            } else if (ticTacToeEngine.cpuWon()) {
               cpuWonCount++;
            } else {
               drawCount++;
            }
            ticTacToeEngine = new TicTacToeEngine();
         }
         console.log("cpuWonCount = " + cpuWonCount);
         console.log("playerWonCount = " + playerWonCount);
         console.log("drawCount = " + drawCount);
         expect(playTimes - cpuWonCount - drawCount).to.equal(0);
      });

      it('play tic tac toe, cpu begins', () => {
         var randomPlay;
         var plays;
         expect(ticTacToeEngine).to.not.be.null;
         var play;
         var cpuWonCount = 0;
         var playerWonCount = 0;
         var drawCount = 0;
         var playTimes = 50;
         var k;
         var count;
         for(k = 0; k < playTimes; k++) {
            count = 0;
            ticTacToeEngine.cpuPlay();
            while(!ticTacToeEngine.isEnd() && count < 5) {
               count++;
               plays = ticTacToeEngine.status.getChildren(ticTacToeEngine.status.PLAYER);
               expect(plays).to.not.be.null;
               expect(plays.length > 0).to.equal(true);
               randomPlay = plays[Math.floor((Math.random() * plays.length))];
               play =  _gridValuesGetPlay(ticTacToeEngine.status.PLAYER, ticTacToeEngine.status, randomPlay);
               expect(play).to.not.be.null;
               expect(play[0] >= 0).to.equal(true);
               expect(play[0] < 3).to.equal(true);
               expect(play[1] >= 0).to.equal(true);
               expect(play[1] < 3).to.equal(true);
               ticTacToeEngine.play(play[0], play[1]);
            }
            expect(ticTacToeEngine.isEnd()).to.equal(true);
            if(ticTacToeEngine.playerWon()) {
               playerWonCount++;
            } else if (ticTacToeEngine.cpuWon()) {
               cpuWonCount++;
            } else {
               drawCount++;
            }
            ticTacToeEngine = new TicTacToeEngine();
         }
         console.log("cpuWonCount = " + cpuWonCount);
         console.log("playerWonCount = " + playerWonCount);
         console.log("drawCount = " + drawCount);
         expect(playTimes - cpuWonCount - drawCount).to.equal(0);
      });


   });
});
