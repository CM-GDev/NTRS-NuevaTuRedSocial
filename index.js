
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
  

console.log(findOdd([1,2,3,2,1]))