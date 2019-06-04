function series(n) {
	var series = []
	if (n < 1) return series
	series.push(1)
	for (i = 1; i < n; i++) {
		series.push(series.reduce(function (sum, value) {return sum+value}))
	}
	console.log(series)
	return series
}

series(6)