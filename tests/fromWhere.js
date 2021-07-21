function fromWhere(regNum){
    switch(regNum){
        case 'CY':
        return 'Bellville';
        break;
        case 'CJ':
        return 'Paarl';
        break;
        case 'CA':
        return 'Cape Town';
        break;
        case 'CC':
        return 'Some other place!';
        break;
                 }
  }
  console.log(fromWhere('CY'), 'Bellville');
  console.log(fromWhere('CJ'), 'Paarl');
  console.log(fromWhere('CA'), 'Cape Town');
  console.log(fromWhere('CC'), 'Some other place!');
console.log(fromWhere('CY'), 'Bellville');
console.log(fromWhere('CJ'), 'Paarl');
console.log(fromWhere('CA'), 'Cape Town');
console.log(fromWhere('CC'), 'Some other place!');

describe('fromWhere',function(){
    it("This should show the registration for Bellville", function(){
        assert.equal(fromWhere('CY'), 'Bellville');
  
    })
    it("This should show the registration for Paarl", function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
  
    })
    it("This should show the registration for Cape Town", function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
     
    })
    it("This should show the registration for some other place!", function(){
       assert.equal(fromWhere('CC'), 'Some other place!');
    })
});