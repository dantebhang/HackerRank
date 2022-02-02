function marsExploration(s) {

  let count = 0;

  for (let i = 0; i < s.length; i += 3) {
      s[i] === "S" ? count : count++
      s[i + 1] === "O" ? count : count++
      s[i + 2] === "S" ? count : count++
  }
  return count;
}
