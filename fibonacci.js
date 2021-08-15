/*
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
3rd = 2nd + 1st;
4rth = 3rd + 2nd;
5th = 4rth + 3rd;
15th = 14th + 13th;
nth = (n-1)th + (n - n2)th;
ith = (i-1)th + (i - n2) th;
*/

// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     // nth = (n-1)th + (n-2)th 
//     // ith = (i-1)th + (i-2)th
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);


// const rimu = [0, 1];
// for (let i = 2; i <= 6; i++) {
//     rimu[i] = rimu[i - 1] + rimu[i - 2];
// }
// console.log(rimu);


/*
function fibonacchiSeries(num) {
    const fibo = [0, 1];
    if (typeof num != 'number') {
        return 'please give a number'
    }
    if (num < 2) {
        return 'please enter a positive number gtreater than 2'
    }
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboSeries = fibonacchiSeries(-21);
console.log(fiboSeries); */


function fibonacciSeries(num) {
    let fibo = [0, 1];
    if (typeof num != 'number') {
        return 'wrong number'
    }
    if (num < 2) {
        return 'enter getter number of 2'
    }
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const myfibo = fibonacciSeries(-54);
console.log(myfibo);