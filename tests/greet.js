function greet(Bob) {
    return ('Hello, ' + Bob);
  }

  describe('greeting function',function(){
    it("This should greet Viollah with 'Hello, Viollah'",function(){
          assert.equal("Hello, Viollah",greet("Viollah"))
    });
});
