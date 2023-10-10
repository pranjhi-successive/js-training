//Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")
function giveCount(inputString) {
    let countMap = {},
      output = ''
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] in countMap) countMap[inputString[i]] += 1
      else countMap[inputString[i]] = 1
    }
    for (let c in countMap) {
      output = output + c + countMap[c]
    }
    return output
  }
  
  const inputString = 'abcabcdabbcc',
    output = giveCount(inputString)
  console.log( output);
  
  

  

