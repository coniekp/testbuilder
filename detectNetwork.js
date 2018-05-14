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

  var cardLength = cardNumber.length;
  var hasPrefix = function (networkPrefix){
    return networkPrefix === cardNumber.substring(0, networkPrefix.length);
  };

  var networks = [
    {name: "Diner's Club",
    	length: [14],
    	prefix: ["38", "39"]},
  	{name: "American Express",
  		length: [15],
  		prefix: ["34", "37"]},
  	{name: "Visa",
  		length: [13,16, 19],
  		prefix: ["4"]},
  	{name: "MasterCard",
  		length: [16],
  		prefix: ["51", "52", "53", "54", "55"]},
  	{name: "Discover",
  		length: [16, 19],
  		prefix: ["65", "644", "645", "646", "647", "648", "649", "6011"]},
  	{name: "Maestro",
  		length: [12,13,14,15,16,17,18,19],
  		prefix: ["5018", "5020", "5038", "6304"]},
    {name: "China UnionPay",
      length: [16, 17, 18, 19],
      prefix: ["624", "625", "626"]},
    {name: "Switch",
      length: [16, 18, 19],
      prefix: ["4903", "4905", "4911", "4936", "564182", "6333", "633110", "6759"]}];
  
  //additional prefixes for China UnionPay
  for (var i = 622126; i<=622925; i++){
    networks[6].prefix.push(i.toString());
  }
  //additional prefixes for China UnionPay
  for (var i = 6282; i<=6288; i++){
    networks[6].prefix.push(i.toString());
  }

  //exception for Visa and Switch overlap
  if ([16, 19].includes(cardLength) && cardNumber[0]==='4'){
    return networks[7].prefix.some(hasPrefix)? "Switch": "Visa";
  }
  
  //all other cases
  for (var i in networks){

  	if (networks[i].length.includes(cardLength) && networks[i].prefix.some(hasPrefix)){    
  		return networks[i].name;
    } 	
  }

  return "Unable to detect network";
};


