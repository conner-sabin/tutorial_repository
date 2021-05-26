var assert = require('assert');
const { expect } = require('chai');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Math', function(){
    it('Should be that 3*3 = 9', function(){
        expect(3*3).to.equal(9);
    });

    it('Should be that (3-4)*8 = -8', function(){
        expect((3-4)*8).to.equal(-8);
    });

});