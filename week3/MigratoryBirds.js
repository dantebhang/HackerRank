function migratoryBirds(arr) {
  //create an empty object/hashmap to store birdId: tally
  let seenBirds = {};

  arr.forEach((bird) => {
      //setting tally for each instance of bird
      if (!seenBirds[bird]) {
          seenBirds[bird] = 1;
      } else {
          seenBirds[bird]++
      }
  })

  //setting these variables for comparison
  let birdId = Infinity;
  let total = 0;

  //looping through obj
  for (let key in seenBirds) {
      //if bird tally is more than total 
      if (seenBirds[key] > total) {
          //set total to value
          total = seenBirds[key];
          birdId = key;
      //if tallys are the same
      } else if (seenBirds[key] === total) {
          if (birdId > key) {
              birdId = key
          }
      }
  }
  return birdId;
}

//NOTE: go back for possible optimization