function fibonacciSerial(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
const myfibo = fibonacciSerial(6);
console.log(myfibo);