function yearsAgo(years){
    const year = new Date();
     return year.getFullYear()-years;
   }
   console.log((new Date().getFullYear() - 1976), yearsAgo(1976));
   console.log((new Date().getFullYear() - 2000), yearsAgo(2000));



   describe('yearsAgo',function(){
    it("This should return how many years ago that year is from the previous year.",function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        
    })
    it("This should return how many years ago that year is from the current year.",function(){
       assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    })

});