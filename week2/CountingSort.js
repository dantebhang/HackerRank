function countingSort(arr) {
  //create an array of 100 all filled with 0 values
  let result = new Array(100).fill(0);

  //for each instance of number in array, increment 0 count value in result array
  arr.forEach((number) => {
      result[number]++
  })

  return result;

}