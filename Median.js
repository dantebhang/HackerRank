
function findMedian(arr) {
  let half = Math.floor(arr.length /2)
  let sortedArr = arr.sort((a, b) => a-b)
  
  if(sortedArr.length % 2){
      return sortedArr[half]
  } else {
      return (sortedArr[half] + sortedArr[half] + 1) / 2.0
  }
}