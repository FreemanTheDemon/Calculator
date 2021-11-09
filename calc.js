const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate (type 'operators' for a list of usable operators)? \n", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	// this statement handles different operations
	if (mathSymbol === '+') {
		let result = tokens[1];
		for (var i = 2; i < tokens.length; i++) {
			result += tokens[i];
		}
		console.log(result);
	} else if (mathSymbol === '-') {
		let result = tokens[1];
		for (var i = 2; i < tokens.length; i++) {
			result -= tokens[i];
		}
		console.log(result);
	} else if (mathSymbol === '*') {
		let result = tokens[1];
		for (var i = 2; i < tokens.length; i++) {
			result *= tokens[i];
		}
		console.log(result);
	} else if (mathSymbol === '/') {
		let result = tokens[1];
		for (var i = 2; i < tokens.length; i++) {
			result /= tokens[i];
		}
		console.log(result);
	} else if (mathSymbol === '√' || mathSymbol === 'sqrt') {
		console.log(Math.sqrt(num1));
	} else if (mathSymbol === '^') {
		console.log(Math.pow(num1, num2));
	} else if (mathSymbol === '%') {
		console.log(num1 % num2);
	} else if (mathSymbol === 'operators') {
		console.log('OPERATORS: \n +: add \n -: subtract \n *: multiply \n /: divide \n √ OR sqrt: square root \n ^: power \n %: remainder');
	} else {
		console.log('INVALID INPUT');
	}

	// This line closes the connection to the command line interface.
	reader.close()

});