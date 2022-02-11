function maximumPerimeterTriangle(sticks) {
  //descending order
  sticks.sort((a, b) => b - a)
  
  for(let i = 0; i < sticks.length - 2; i++){
      if(sticks[i+2] + sticks[i+1] > sticks[i]){
          return [sticks[i+2], sticks[i+1], sticks[i]]
      } 
  }
  return [-1]
}