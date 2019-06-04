function checkAnagrams(input1, input2) {

	if (input1.length != input2.length) {
		console.log(false)
		return false
	}
	input1 = input1.split("")
	input2 = input2.split("")
	
	for (let i = 0; i < input1.length; i++) {
		let j = input2.indexOf(input1[i])
		if (j < 0) return console.log(false)
		
		input2.splice(j, 1)
		
	}
	console.log(true)
	return true

}

checkAnagrams("Divyanshu", "Dhuiinsya")