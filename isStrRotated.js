function checkStringRotated(input, input2) {
	

	if (input.length != input2.length) return false
	for (numb = 0; numb <= input.length; numb++ ) {
		let output1 = ""
		let output2 = ""
		for( i = 0; i < input.length; i++) {
			if (i < numb) output1 += input[i]
			else output2 += input[i]
		}
	let output = output2 + output1
	console.log(output)
	if(output == input2) return  console.log(true, numb)
	
	}
	console.log(false)
	return false

}

checkStringRotated('sorrow', 'wsorro')