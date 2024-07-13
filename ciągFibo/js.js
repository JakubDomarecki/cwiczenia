// const fibo = (n) => {

// let arr = [0,1]

// while (arr.length < n) {
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
// }


// console.log(arr[arr.length - 1]);

// }

// fibo(10);





// 2 sposob

const fibo = (n) => {

    let arr = [0,1]

    for (i = 2; i < n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    
    
    console.log(arr[arr.length - 1]);
    
    }
    
    fibo(10);