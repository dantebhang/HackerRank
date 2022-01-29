// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// The unique element is

// .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

//     int a[n]: an array of integers

// Returns

//     int: the element that occurs only once

// Input Format

// The first line contains a single integer,
// , the number of integers in the array.
// The second line contains space-separated integers that describe the values in .

function lonelyinteger(a) {
  let unique = a[0];

  a.map((el) => {
    //filtered arrays with matched numbers 
      let occurrences = a.filter((num) => num === el).length
      if(occurrences === 1){
          unique = el
      }
  })

  return unique
}