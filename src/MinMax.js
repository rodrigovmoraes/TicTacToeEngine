var MinMax = function() {
  /*******************************************************************
  **************************Constants*********************************
  *******************************************************************/
  /*******************************************************************
  ******************************Init*********************************
  *******************************************************************/
  this.status = null;
}

MinMax.prototype = (function() {
   /******************************************
   *******************private*****************
   ******************************************/
   var _setStatus = function(status) {
      this.status = status;
   }

   var _minMax = function(status, depth, alpha, beta, player, opponent, playerTime) {
      var value;
      var childValue;
      var children;
      var i;
      var index;
      //base case
      if (depth < 0 || status.isEnd()) {
         return { 'value': status.getValue(player, opponent), 'status': status };
      }

      if (playerTime) {
         value = Number.NEGATIVE_INFINITY;
         //children are the possible choice of the player
         children = status.getChildren(player);
         //for each possible choice
         for (i = 0; i < children.length; i++) {
            childValue = _minMax(children[i], depth - 1, alpha, beta, player, opponent, false).value;
            if(childValue > value) {
               value = childValue;
               index = i;
            } else if(childValue === value && children[i].isEnd()) {
               index = i;
            }
            alpha = Math.max(alpha, childValue);
            if (beta <= alpha) {
               break;
            }
         }
         return { 'value': value, 'status': children[index] };
      } else {
         //opponent time
         value = Number.POSITIVE_INFINITY;
         //children are the possible choice of the player
         children = status.getChildren(opponent);
         //for each possible choice
         for (i = 0; i < children.length; i++) {
            childValue = _minMax(children[i], depth - 1, alpha, beta, player, opponent, true).value;
            if (childValue < value) {
               value = childValue;
               index = i;
            } else if(childValue === value && children[i].isEnd()) {
               index = i;
            }
            beta = Math.min(beta, childValue);
            if (beta <= alpha) {
               break;
            }
         }
         return { 'value': value, 'status': children[index] };
      }
   }

   var _getValue = function(player, opponent) {
      return _minMax(this.status, 10, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, player, opponent, true);
   }
   /******************************************
   *******************public******************
   ******************************************/
   return {
      setStatus : _setStatus,
      getValue: _getValue
   }
}());
