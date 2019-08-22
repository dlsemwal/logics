function program3 (n) {
	for(let i = 1; i <= n; i++) {
		let numbGrp = ""
		for (let j = 1; j <= n; j++) {
			if (j <= n - i) {
				numbGrp += "\t"
			} else if ( j == n ) {
				var suffix =  numbGrp.split("")
				suffix.pop()
				numbGrp += `${j-(n-i)}\t` + suffix.reverse().join("")
				
			} else {
				numbGrp += `${j-(n-i)}\t`
			}
			
		}
		console.log(numbGrp)
	}
}


program3(5)