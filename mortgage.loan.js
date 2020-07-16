function calculateMortgage(p, r, n) {
	r = convertPercentToDecimal(r);
	n = convertYearsToMonths(n);
	return r;
}

console.log(calculateMortgage(4000, 18, 2));

function convertPercentToDecimal(percent) {
	return (percent / 100) / 12;
}

function convertYearsToMonths(years) {
	return years * 12;
}

