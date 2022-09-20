const arr = [5, 10, 3, 2, 50, 80];
const b = 79;
const checkDiff = (arr, num) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++) {
            if(Math.abs(arr[i] - arr[j]) === num){
                return 1;
            }
        }
    }
    return 0;
}

console.log(checkDiff(arr, b));