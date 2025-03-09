function sortByDivisors(arr) {
    function countDivisors(n) {
        let divisors = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisors++;
                if (i !== n / i) {
                    divisors++;
                }
            }
        }
        return divisors;
    }

   return arr.sort((a, b) => countDivisors(a) - countDivisors(b));
}

// const array = [10, 15, 8, 3, 6];
// console.log(array);
console.log(sortByDivisors(array)); // [3, 8, 6, 10, 15]