// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example


// There are instances of ', of '' and of ''. For each query, add an element to the return array,

// .

// Function Description

// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

// matchingStrings has the following parameters:

//     string strings[n] - an array of strings to search
//     string queries[q] - an array of query strings

// Returns

//     int[q]: an array of results for each query

// Input Format

// The first line contains and integer
// , the size of .
// Each of the next lines contains a string .
// The next line contains , the size of .
// Each of the next lines contains a string . 

//brute force (O)n^2 time complexity
function matchingStrings(strings, queries) {
  let counter = 0;
  let output = [];

  for (let i = 0; i < queries.length; i++) {
      for (let j = 0; j < strings.length; j++) {
          if (queries[i] == strings[j]) {
              counter++
          }
      }
      output.push(counter);
      counter = 0;
  }

  return output;

}