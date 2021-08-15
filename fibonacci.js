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



function fibonacchiSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboSeries = fibonacchiSeries([234]);
console.log(fiboSeries);