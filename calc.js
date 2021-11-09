const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? ", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	// this logs the symbol that has been inputted
	console.log('mathSymbol', mathSymbol);

	// this statement handles different operations
	if (mathSymbol === '+') {
		console.log(num1 + num2);
	} else if (mathSymbol === '-') {
		console.log(num1 - num2);
	} else if (mathSymbol === '*') {
		console.log(num1 * num2);
	} else if (mathSymbol === '/') {
		console.log(num1 / num2);
	} else if (mathSymbol === '√' || mathSymbol === 'sqrt') {
		console.log(Math.sqrt(num1));
	}

	// This line closes the connection to the command line interface.
	reader.close()

});
