function transportFee(fees){
    switch(fees){
      case 'morning':
        return 'R20';
        break;
        case 'afternoon':
        return 'R10';
        break;
        case 'nightshift':
        return 'free';
        break;
               }
  }
  console.log(transportFee('morning'), 'R20');
  console.log(transportFee('afternoon'), 'R10');
  console.log(transportFee('nightshift'), 'free', 'for night shift return free');


  describe('transportFee',function(){
    it("This should show the morning shift which is R20",function(){
        assert.equal(transportFee('morning'), 'R20');
    })
    it("This should show the afternon shift which is R10",function(){
       assert.equal(transportFee('afternoon'), 'R10');
   })
    it("This should show the nightshift which is free",function(){
       assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })
});