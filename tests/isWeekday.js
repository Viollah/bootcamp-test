function isWeekday (dayCheck){
    return dayCheck.startsWith('Monday');
  }
  console.log(isWeekday('Saturday'), false);
  console.log(isWeekday('Monday'), true);


  describe('Weekday oryearMonth',function(){
    it("This should show true if its weekDay",function(){
        assert.equal(isWeekday('Monday'), true);
    })
    it("This should show false if its not weekDay",function(){
        assert.equal(isWeekday('Saturday'), false);
    })
});