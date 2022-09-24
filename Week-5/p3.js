function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}
const arr = [1, 2, 9, 9, 8, 7, 6, 4, 2, 2];
const arr2 = [1, 2, 9, , 8, 7, 6, 4, 5];
console.log(hasDuplicate(arr));
console.log(hasDuplicate(arr2));
