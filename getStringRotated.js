
function getStrRotated(input, numb) {
	let output = ''
	if (numb > input.length) return false
	for( i = 0; i < numb; i++) {
		output += input[i]
	}
	output = input.slice(numb) + output
	console.log(output)
	return  output
}


getStrRotated("Divyanshu", 2)


function getStringRotated(input, numb) {
	let output1 = ''
	let output2 = ''
	numb = numb % input.length
	for(let i = 0; i < input.length; i++) {
		if (i < numb) output1 += input[i]
		else output2 += input[i]
	}
	output = output2 + output1
	console.log(output)
	return  output
}


getStringRotated("Amritanjali", 2)


