
(function(){
    
  'use strict';
  var chai = require('jasmine');
  var myApp = require('../app/library.js');

  describe("Get Primes tests ", function() {
    describe("Case for invalid inputs", function() {

      it("should return 'wrong input' for '80'", function() {
        expect(myApp.getPrimes('80')).toEqual('wrong input');
      });

      it("should return 'wrong input' for '[]'", function() {
        expect(myApp.getPrimes([])).toEqual('wrong input');
      });

      it("should return '[]' for '1'", function() {
        expect(myApp.getPrimes(1)).toEqual([]);
      });

      it("should return '[]' for '0'", function() {
        expect(myApp.getPrimes(0)).toEqual([]);
      });

      it("should return '[]' for '-2'", function() {
        expect(myApp.getPrimes(-2)).toEqual([]);
      });

      it("should return '[]' for '-100'", function() {
        expect(myApp.getPrimes(-100)).toEqual([]);
      });
    });

    describe("Case for prime numbers", function() {

      it("should return '[2,3,5,7]' for `10`", function() {
        expect(myApp.getPrimes(10)).toEqual([2,3,5,7]);
      });

      it("should return '[2,3,5]' for `6`", function() {
        expect(myApp.getPrimes(6)).toEqual([2,3,5]);
      });

       it("should return '[ 2, 3, 5, 7, 11, 13, 17, 19 ]' for `20`", function() {
        expect(myApp.getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
      });

       it("should return '[2, 3, 5, 7, 11, 13]' for '14'", function() {
        expect(myApp.getPrimes(14)).toEqual([2, 3, 5, 7, 11, 13]);
      });
          
    });
  });
})();
