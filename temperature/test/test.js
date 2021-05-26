let convert = require("../app.js");
const { expect } = require('chai');

describe('Temperature Conversion', function() {

  describe('cToF', function() {
    it('should convert -40 celsius to -40 fahrenheit', function() {
        expect(-40).to.equal(convert.cToF(-40));
    });
    it('should onvert 0 celsius to 32 fahrenheit', function(){
        expect(32).to.equal(convert.cToF(0));
    });
    it('should return undefined if no temperature is input', function(){
        expect(undefined).to.equal(convert.cToF(''));
    });
  });

  describe('fToC', function() {
    it('should convert -40 fahrenheit to -40 celsius', function() {
        expect(-40).to.equal(convert.fToC(-40));
    });
    it('should convert 32 fahrenheit to 0 celsius', function() {
        expect(0).to.equal(convert.fToC(32));
    });
    it('should return undefined if no temperature is input', function(){
        expect(undefined).to.equal(convert.fToC(''));
    });
  });

});