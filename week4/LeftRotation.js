function rotateLeft(d, arr){
    
  while(d){
      //will shift first element and push to end of array
      arr.push(arr.shift())
      //when d is 0 break the loop
      d--
  }
  return arr
}
