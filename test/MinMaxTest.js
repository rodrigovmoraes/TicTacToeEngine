describe('MinMax', () => {

   var MinMaxTestData = function(value, children, pend) {
      this.value = value;
      this.children = children;
      if(pend === undefined) {
         this.end = false;
      } else {
         this.end = pend;
      }
   }

   MinMaxTestData.prototype = {
      getValue: function() {
         return this.value;
      },

      isEnd: function() {
         return this.end;
      },

      getChildren: function() {
         return this.children;
      }
   }

   var MinMaxNode = function(value, children) {
      if(!children) {
         return new MinMaxTestData(value, [], true);
      } else {
         return new MinMaxTestData(value, children, false);
      }
   }

   it('#getValue()', () => {
      var minMaxData = MinMaxNode(0, [
                          MinMaxNode(3, [ MinMaxNode(0, [ MinMaxNode(-1),
                                                          MinMaxNode(4)]),
                                          MinMaxNode(0, [ MinMaxNode(5),
                                                          MinMaxNode(0)])
                                    ]),
                          MinMaxNode(0, [ MinMaxNode(0, [ MinMaxNode(-6),
                                                       MinMaxNode(-4)]),
                                       MinMaxNode(0, [ MinMaxNode(0),
                                                       MinMaxNode(100)])
                                   ])
                       ]);
      var minMax = new MinMax();
      minMax.setStatus(minMaxData);
      expect(minMax.getValue().value).to.equal(4);
   });
});
