function pickingNumbers(a) {

  let obj = {}
  
  for(let number of a) {
      if(obj[number]) {
          obj[number]++
      }else {
          obj[number] = 1
      }
  }
  
  let longest = 0;
  
  
  for(let key in obj) {
      let tempNumber = obj[Number(key)]
      
      if(obj[Number(key) + 1]) {
          tempNumber += obj[Number(key) + 1]
      }
      if(tempNumber > longest) {
          longest = tempNumber
      }
  }
  
  return longest
}