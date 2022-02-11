function migratoryBirds(arr) {
  //create hash map to store keys and values for seen birds
  let seenBirds = {};
  //for each to tally each bird
  
  arr.forEach((bird) => {
      if(!seenBirds[bird]){
          seenBirds[bird] = 1
      } else {
          seenBirds[bird]++
      }
  })
  
  //create two variables for key and value for comparison 
  let birdId = Infinity;
  let total = 0;
  //loop through object to compare values
  for(let key in seenBirds){
      //set values to declared variables
      if(seenBirds[key] > total){
          total = seenBirds[key]
          birdId = key
      }//condition for if values are the same
      if( total === seenBirds[key] && birdId > key){
              birdId = key
      }
  }
  return birdId;
}