/*
function largentElement(numbers) {
    const largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        console.log(element);
    }
}
const ages = [45, 88, 12, 78, 15, 19];
const oldest = largentElement(ages);
*/



function largentElement(numbers) {
    let largest = 0;
    for (let i = 0; i <= numbers.length; i++) {
        const element = age[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const age = [51, 45, 75, 15, 56, 5, 42];
const oldest = largentElement(age);
const oldest2 = largentElement([-2, -45, -34, -51]);
console.log('oldest', oldest2);



