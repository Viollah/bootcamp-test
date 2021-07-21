function regCheck(regNo, regFrom) {
    return regNo.endsWith(regFrom);
  }
    console.log(regCheck('DC 55 YU GP', 'GP'), true);
    console.log(regCheck('DC 55 YU GP', 'EC'), false);
    console.log(regCheck('5566 L', 'L'), true);
    console.log(regCheck('5566 L', 'M'), false);
    console.log(regCheck('ERT 123 EC', 'EC'), true);
    console.log(regCheck('ERT 123 EC', 'GP'), false);
    console.log(regCheck('FGT 123 MP', 'MP'), true);
    console.log(regCheck('FGT 123 MM', 'MP'), false);

    describe('regCheck',function(){
        it("This should true is number plate is Gp",function(){
            assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        })
        it("This should false if the number plate is not Gp",function(){
          assert.equal(regCheck('ERT 123 EC', 'GP'), false);
        })
        it("This should true is number plate is EC",function(){
            assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        })
        it("This should false if the number plate is not EC",function(){
            assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        })
        it("This should true is number plate is L",function(){
            assert.equal(regCheck('5566 L', 'L'), true);
        })
        it("This should true if the number plate is MP",function(){
            assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        })
        it("This should false if the number plate is not MP",function(){
            assert.equal(regCheck('FGT 123 MM', 'MP'), false);
        })
    });
