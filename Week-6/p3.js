const arr = [0, 1, 0, 1, 2, 2, 1, 0, 2, 1];
//_-> 1st Approach
console.log(arr.sort((a, b) => a-b));

// -> 2nd Approach
const sortArr = (arr) => {
    let count_zero = count_one = count_two = 0;
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 0 : {
                count_zero++;
                break;
            }
            case 1 : {
                count_one++;
                break;
            }
            case 2 : {
                count_two++;
                break;
            }
        }
    }
    for(let i = 0; i < count_zero; i++) {
        arr[i] = 0;
    }
    for(let i = count_zero; i < count_zero+count_one; i++){
        arr[i] = 1;
    }
    for(let i = count_zero+count_one; i < arr.length; i++) {
        arr[i] = 2;
    }
    return arr;
}
console.log(sortArr(arr));