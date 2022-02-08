function sockMerchant(n, ar) {
  let countPairs = 0;
  let storage = new Set();
  
  for(let item of ar){
      if (storage.has(item)){
          storage.delete(item)
          countPairs++
      } else {
          storage.add(item)
      }
  }
  return countPairs;
}