/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 
  /*
  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });
  */
  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert.equal(detectNetwork('4123456789012'), 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert.equal(detectNetwork('4123456789012345'),'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert.equal(detectNetwork('4123456789012345678'), 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
  var prefixes = ['51', '52', '53', '54', '55'];
  var lengths = [16];
  var fillToLength = function (str, length){
    while (str.length < length) {
      str = str + '0';
    }
    return str;
  };

  prefixes.forEach(function(prefix){
    lengths.forEach(function(length){
      var cardNum = fillToLength(prefix, length);
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
        detectNetwork(cardNum).should.equal('MasterCard');
      });
    });
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both.

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();
  var prefixes = ['65', '644', '645', '646', '647', '648', '649', '6011'];
  var lengths = [16, 19];
  var fillToLength = function (str, length){
    while (str.length < length) {
      str = str + '0';
    }
    return str;
  }

  prefixes.forEach(function(prefix){
    lengths.forEach(function(length){
      var cardNum = fillToLength(prefix, length);
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
        detectNetwork(cardNum).should.equal('Discover');
      });
    });
  });
});

describe('Maestro', function() {
  var should = chai.should();
  var prefixes = ['5018', '5020', '5038', '6304'];
  var lengths = [12,13,14,15,16,17,18,19];
  function fillToLength (str, length){
    while (str.length < length) {
      str = str + '0';
    }
    return str;
  }

  prefixes.forEach(function(prefix){
    lengths.forEach(function(length){
      var cardNum = fillToLength(prefix, length);
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
        detectNetwork(cardNum).should.equal('Maestro');
      });
    });
  });
    
});

describe('China UnionPay', function(){
    
  var should = chai.should();
  var lengths = [16, 17, 18, 19];
  var prefixes = [];

  //adding China UnionPay prefixes to be tested into prefixes array
  for (var i = 622126; i<=622925; i++){
    prefixes.push(i.toString());
  }
  for (var i = 624; i<=626; i++){
    prefixes.push(i.toString());
  }
  for (var i = 6282; i<=6288; i++){
    prefixes.push(i.toString());
  }

  function fillToLength (str, length){
    while (str.length < length) {
      str = str + '0';
    }
    return str;
  }

  prefixes.forEach(function(prefix){
    lengths.forEach(function(length){
      var cardNum = fillToLength(prefix, length);
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
        detectNetwork(cardNum).should.equal('China UnionPay');
      });
    });
  });
});

describe('Switch', function(){

  var should = chai.should();

  var prefixes = ['4903', '4905', '4911', '4936', '564182', '6333', '633110', '6759'];
  var lengths = [16, 18, 19];

  function fillToLength (str, length){
    while (str.length < length) {
      str = str + '0';
    }
    return str;
  }

  prefixes.forEach(function(prefix){
    lengths.forEach(function(length){
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
        var cardNum = fillToLength(prefix, length);
        detectNetwork(cardNum).should.equal('Switch');
      });
    });
  });
    
});
