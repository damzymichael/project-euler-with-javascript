//PROJECT EULER SOLUTIONS WITH JAVASCRIPT

//Uncomment console logs below solutions to see results in your browser console

/*
Challenge 1
If we list all the natural numbers below 10 that are multiples of 3 or 5,
We get 3, 5, 6 and 9. The sum of these multiples is 23

Find the sum of all the multiples of 3 or 5  below 1000.
*/
let sumThreeFiveMultiples = 0;
for (let i = 0; i < 1000; i++) {
  if (i < 3) continue;
  sumThreeFiveMultiples += i % 3 == 0 || i % 5 == 0 ? i : 0;
}
// console.log(
//   'Total of multiples of 3 and 5 up till 1000 is:',
//   sumThreeFiveMultiples
// );

/* 
Challenge 2
Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first terms 10 will be: 1, 2, 3, 5. 8, 13, 21, 34, 55, 89
By considering the terms in the Fibonacci sequence whose values do not exceed four million,
Find the sum of the even-valued terms.
*/
/** @param {number} limit last value in the fibbonacci sequence would be less than limit */
function fibEvenSum(limit) {
  const terms = [];

  terms.push(1, 2);

  let lastTwoTotal = 0;

  while (lastTwoTotal < limit) {
    lastTwoTotal = terms[terms.length - 1] + terms[terms.length - 2];
    terms.push(lastTwoTotal);
  }

  return terms.filter(term => term % 2 === 0).reduce((a, b) => a + b);
}
// console.log(
//   'Sum of fibonnaci sequence whose last values is less than 4 million is:',
//   fibEvenSum(4000000)
// );

/**
 * Returns boolean depending if number entered is a prime number
 * @this {number}
 * @returns {boolean}
 */
Number.prototype.isPrimeNumber = function () {
  let factors = [];
  for (let i = 2; i <= Math.floor(this / 2); i++) {
    if (this % i === 0) factors.push(i);
    // factors = this % i === 0 ? [...factors, i] : factors
  }
  return factors.length ? false : true;
};

/**
 * Returns array of prime factors of number entered
 * @param {number} number
 * @returns {number[]}
 */

function getPrimeFactors(number) {
  const primeFactors = [];
  for (let i = 2; i <= Math.floor(number / 2); i++) {
    if (i.isPrimeNumber() && number % i === 0) primeFactors.push(i);
  }
  console.log(primeFactors);
  return primeFactors;
}

/* Challenge 3
The prime factors of 13195 are 5, 7, 13 and 29
What is the largest prime factor of the number 600851475143
*/
function largestPrimeFactor(number) {
  let largestPrime = 1;

  //Remove all factors of 2
  while (number % 2 === 0) {
    largestPrime = 2;
    number /= 2;
  }

  // Now number must be odd, we can skip even numbers
  for (i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i == 0) {
      largestPrime = i;
      number /= i;
    }
  }

  // If the remaining number is a prime greater than 2
  if (number > 2) largestPrime = number;

  return largestPrime;
}
console.log(largestPrimeFactor(600851475143));
