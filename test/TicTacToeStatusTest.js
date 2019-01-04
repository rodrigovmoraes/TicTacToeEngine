describe('TictactoeStatus', () => {
   describe('#getPlayerValue()', () => {

      var ticTacToeStatus;

      beforeEach(function() {
        ticTacToeStatus = new TicTacToeStatus();
      });

      it('empty grid should return score 0 for both players', () => {
         assert.equal(0, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));
         assert.equal(0, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));
      });

      it('count diagonal player elements 1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));
      });

      it('count reverse diagonal player elements 1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));
      });

      it('count row player elements 1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));
      });

      it('count row player elements 2', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));
      });

      it('count row player elements 3', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));
      });

      it('count column player elements 1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));
      });

      it('count column player elements 2', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));
      });

      it('count column player elements 3', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.PLAYER, ticTacToeStatus.CPU));
      });

      it('count diagonal cpu elements 1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));
      });

      it('count reverse diagonal cpu elements 1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));
      });

      it('count row cpu elements 1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));
      });

      it('count row cpu elements 2', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.CPU]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));
      });

      it('count row cpu elements 3', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.CPU]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));
      });

      it('count column cpu elements 1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(1, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));
      });

      it('count column cpu elements 2', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU]
         ]);
         assert.equal(2, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));
      });

      it('count column cpu elements 3', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.CPU]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));

         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU]
         ]);
         assert.equal(3, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));
      });

      it('count player x cpu elements 0', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER]
         ]);
         assert.equal(0, ticTacToeStatus.getPlayerValue(ticTacToeStatus.CPU, ticTacToeStatus.PLAYER));
      });
   });

   describe('#getChildren()', () => {
      var ticTacToeStatus;
      var grids;
      var k;

      beforeEach(function() {
        ticTacToeStatus = new TicTacToeStatus();
        grids = [];
        k = 0;
      });

      it('getChildren for player', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);

         var result = ticTacToeStatus.getChildren(ticTacToeStatus.PLAYER);
         assert.equal(result.length, 6);
         for(k = 0; k < result.length; k++) {
            grids.push(result[k].gridValues);
         }
         expect(grids).to.have.deep.members([
             [[ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
              [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
              [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]],

             [[ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
              [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
              [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]],

             [[ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
              [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
              [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]],

             [[ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
              [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
              [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]],

             [[ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
              [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
              [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY]],

             [[ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
              [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY],
              [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER]]
         ]);
      });

      it('getChildren for cpu', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         var result = ticTacToeStatus.getChildren(ticTacToeStatus.CPU);
         assert.equal(result.length, 4);
         for(k = 0; k < result.length; k++) {
            grids.push(result[k].gridValues);
         }
         expect(grids).to.have.deep.members([
            [[ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
             [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
             [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]],

            [[ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
             [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
             [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]],

            [[ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
             [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
             [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.EMPTY]],

            [[ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
             [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
             [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU]]
         ]);
      });
   });

   describe('#isEnd()', () => {

      var ticTacToeStatus;

      beforeEach(function() {
        ticTacToeStatus = new TicTacToeStatus();
      });

      it('game is over, player won from diagonal', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, player won from reverse diagonal', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, player won from row 1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, player won from row 3', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, player won from col 2', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, cpu won from diagonal', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });


      it('game is over, cpu won from reverse diagonal', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, cpu won from row 2', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, cpu won from col 1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, cpu won from col 3', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, draw #1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, draw #2', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is over, draw #3', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.CPU, ticTacToeStatus.CPU, ticTacToeStatus.PLAYER],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(true);
      });

      it('game is not over, #1', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.PLAYER, ticTacToeStatus.PLAYER, ticTacToeStatus.CPU],
            [ticTacToeStatus.CPU, ticTacToeStatus.PLAYER, ticTacToeStatus.EMPTY]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(false);
      });

      it('game is not over, #2', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.PLAYER, ticTacToeStatus.CPU, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.CPU, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(false);
      });

      it('game is not over, #3', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.CPU],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.PLAYER]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(false);
      });

      it('game is not over, #4', () => {
         ticTacToeStatus.setGrid([
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY],
            [ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY, ticTacToeStatus.EMPTY]
         ]);
         expect(ticTacToeStatus.isEnd()).to.equal(false);
      });
   });
});
