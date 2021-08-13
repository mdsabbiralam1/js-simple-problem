const buisness = 7450;
const minister = 550;
const army = 8200;
// if (buisness < minister) {
//     console.log('minister er pola bigger');
// }
// else {
//     console.log('buissness man er pola bigger');
// }


/* comare-3
if (buisness > minister && buisness > army) {
    console.log('buisness man er pola is bigger');
}
else if (minister > buisness && minister > army) {
    console.log('minister er pola is bigger');
}
else {
    console.log('army er pola is bigger');
}
*/

var max = Math.max(buisness, army, minister);
// console.log(max);

function findLergest(first, second) {
    if (first > second) {
        return first
    }
    else {
        return second;
    }
}
const lergest = findLergest(23, 210)
console.log('the lergest number is', lergest);