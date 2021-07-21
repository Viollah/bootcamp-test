function countAllPaarl(fromTown){
    var list = fromTown.split(',');
    let counter= 0;
    var town = [];
    for( var i =0; i<list.length; i++){
      var newList= list[i].trim();
      if(newList.startsWith('CJ')){
        // town.push(newList);
         counter++;
        //return counter;
    }
  } 
    //console.log(newList);
    return  counter;
  }

describe('CountAllPaarl',function(){
    it("This should shold the first count of the paarl", function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

      
    })
    it("This should should the second count of the paarl", function(){
        

        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })
});
