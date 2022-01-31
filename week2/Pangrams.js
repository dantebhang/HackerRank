function pangrams(s) {
  let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  s = s.toLowerCase();
  
  let isPangram = alphabet.every((letter) => s.includes(letter))
  
  return isPangram ? "pangram" : "not pangram"

}