function countAllFromTown(regNum,town){
    var list = regNum.split(',');
    let counter = 0;
    var fromTown = [];
    for (var i=0; i<list.length; i++){
      var newList = list[i].trim();
      if(newList.includes(town)){
       counter++; 
       
      }
    }
   console.log(newList);
    return counter;
  }
 
  
  describe('CountAllFromTown',function(){
    it("This should the first town from the count",function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

        assert.equal(fromStellies, 3)
    })
    it("This should show the second town from the count",function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');

        assert.equal(fromKuilsriver, 1)
        
    })
});