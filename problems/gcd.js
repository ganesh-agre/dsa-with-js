/* gcd recursion formula
if(m==n) return m
if(m>n) return gcd(m-n,n)
if(n>m) return  gcd(m,n-m)
*/

function diviser(num) {
  const diviser = [];
  for (let index = 1; index <= num; index++) {
    if (num % index == 0) diviser.push(index);
  }
  return diviser;
}

function gcd(num1, num2) {
  const numADivisers = diviser(num1);
  const numBDivisers = diviser(num2);

  const commonDiviser = numADivisers.filter((numADiviser) =>
    numBDivisers.includes(numADiviser)
  );
  //return Math.max(...commonDiviser);
  return commonDiviser[commonDiviser.length - 1];
}

function gcdRecursive(num1, num2) {
  if (num1 === num2) return num1;
  if (num1 > num2) return gcdRecursive(num1 - num2, num2);
  if (num1 < num2) return gcdRecursive(num1, num2 - num1);
}

console.log(gcd(42, 56));
console.log(gcdRecursive(42, 56));
