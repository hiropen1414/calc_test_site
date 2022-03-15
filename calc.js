let num = {
	A: 0,
	B: 0,
};

function Calculator () {
	this.read = function() {
		num.A = prompt ("a?");
		num.B = prompt ("b?");
	};

	this.sum = function() {
		return +num.A + +num.B;
	};

	this.mul = function() {
		return +num.A * +num.B;
	};
}

let calc = new Calculator();
calc.read();

alert( "Sum=" + calc.sum());
alert( "Mul=" + calc.mul());