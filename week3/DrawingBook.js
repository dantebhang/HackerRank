function pageCount(n, p) {
  const frontFlip = Math.floor(p/2)
  const backFlip = Math.floor((n/2) - frontFlip)
  
  return Math.min(frontFlip, backFlip)

}