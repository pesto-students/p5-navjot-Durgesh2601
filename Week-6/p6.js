
// const arr = [-1, 2, 1, -4];
// const target = 1;

// const threeElements = (arr, target) => {
//     let result = Infinity;
//     let n = arr.length;
//     for(let i = 0; i < n; i++) {
//         for(let j = i + 1; j < n; j++) {
//             for(let k = j + 1; k < n; k++) {
//                 let sum = arr[i] + arr[j] + arr[k];
//                 if(Math.abs(target - result) > Math.abs(target - sum)) {
//                     result = sum;
//                 }
//             }
//         }
//     }
//     return result;
// }
// console.log(threeElements(arr, target));
const dbl = function (x) {
    return x*2
}
console.log(dbl(2))