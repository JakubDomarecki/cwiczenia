const bubbleSort = (arr) => {
    let isSorted = false;
    while(!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                isSorted = false;
            }
        }
    }
    return arr;

}
console.log(bubbleSort([3,0,8,7,2]))



const bubbleSort1 = (arr) => {
    let isSorted = false;
    while(!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
               [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                isSorted = false;
            }
        }
    }
    return arr;

}
console.log(bubbleSort1([3,0,8,7,2]))


const bubbleSort3 = (arr) => {
    return arr.sort((a, b) => a - b);
}
console.log(bubbleSort3([4,1,7,2,0]))