function birthday(s, d, m) {
  let count = 0;
  let sliced;

  if (s.length < m) return 0;

  for (let i = 0; i < s.length; i++) {
      //pair combinations of array
      sliced = s.slice(i, m++)
      
      //use reduce to acc sum of each pair and iterate count only if sum is equal to d
      if (sliced.reduce((acc, curr) => {
          return (acc += curr)
      }, 0) === d
      ) {
          count++
      }
  }
  return count;
}