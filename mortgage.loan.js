function calculateMortgage(p, r, n) {
	r = convertPercentToDecimal(r);
	n = convertYearsToMonths(n);
	var pay = (p * r) / (1 - (Math.pow((1 + r), -n)));
	return parseFloat(pay).toFixed(2);
}

console.log(calculateMortgage(4000, 18, 2));

function convertPercentToDecimal(percent) {
	return (percent / 100) / 12;
}

function convertYearsToMonths(years) {
	return years * 12;
}

const buttonCalculate = document.getElementById('btn-calculate');
buttonCalculate.onclick = function() {
	const costOfHouse = document.getElementById('cost').value;
	const downPayment = document.getElementById('down').value;
	const interest = document.getElementById('interest').value;
	const period = document.getElementById('period').value;
	console.log(costOfHouse, downPayment, interest, period)
}

