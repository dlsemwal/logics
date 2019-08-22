function subsequentOfMaxLength(x) {
  var subArr = [];
  var subSeq = "";
  var ansStr = ""
  for (let i in x) {
    if (i == 0) {
      subSeq = x[i];
      continue;
    }
    if (x[i] != x[i - 1]) {
      subArr.push(subSeq);
      subSeq = x[i];
    }
    if (x[i] == x[i - 1]) {
      subSeq += x[i];
    }
    if (i == x.length - 1) {
      subArr.push(subSeq);
    }
  }
  
  subArr.forEach(function (value, i, arr) {
      if(value.length > ansStr.length && arr.indexOf(value, i+1) > 0) ansStr = value
  })
  console.log(ansStr);
  
}


subsequentOfMaxLength("aabbbccaadddbbdddll")