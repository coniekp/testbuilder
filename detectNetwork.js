// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var length = cardNumber.length;
  var prefix = parseInt(cardNumber.substring(0, 2));

  var networks = [
    {name: "Diner's Club",
    	length: [14],
    	prefix: [38,39]},
  	{name: "American Express",
  		length: [15],
  		prefix: [34, 37]},
  	{name: "Visa",
  		length: [13,16, 19],
  		prefix: [41]},
  	{name: "MasterCard",
  		length: [16],
  		prefix: [51, 52, 53, 54, 55]}];

  for (var i in networks){
  	if (networks[i].length.includes(length) && networks[i].prefix.includes(prefix)){
  		return networks[i].name;
  	}
  }

  return "Unable to detect network";
};


