function calculateMortgage(p, r, n) {
	r = convertPercentToDecimal(r);
	n = convertYearsToMonths(n);
	var pay = (p * r) / (1 - (Math.pow((1 + r), -n)));
	return parseFloat(pay).toFixed(2);
}



function convertPercentToDecimal(percent) {
	return (percent / 100) / 12;
}

function convertYearsToMonths(years) {
	return years * 12;
}

const buttonCalculate = document.getElementById('btn-calculate');
buttonCalculate.onclick = function() {
	var costOfHouse = document.getElementById('cost').value;
	var downPayment = document.getElementById('down').value;
	var interest = document.getElementById('interest').value;
	var period = document.getElementById('period').value;
	var amountBorrowed = costOfHouse - downPayment;
	console.log(calculateMortgage(amountBorrowed, interest, period));
	console.log(costOfHouse, downPayment, interest, period, amountBorrowed)
}

