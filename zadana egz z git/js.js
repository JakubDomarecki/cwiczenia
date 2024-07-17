//1
// function add(a, b) {
//     if (b !== undefined) {
//       return a + b;
//     } else {
//       return function(b) {
//         return a + b;
//       };
//     }
//   }
  
//   console.log(add(2, 5)); // 7
//   console.log(add(2)(5)); // 7



//2
// console.log("i'm a lasagna hog".split("").reverse().join(""));


//3
// console.log(( window.foo || ( window.foo = "bar" )));


//4
// var foo = "Hello";
// (function() {
//   var bar = " World";
//   alert(foo + bar);
// })();
// alert(foo + bar);

//5
// var foo = [];
// foo.push(1);
// foo.push(2);
// console.log(foo.length);


//6
// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};

//7
// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('three');
// })
// console.log('four');
//1 4 3 2


//9
// (function(){
//     var a = b = 3;
//   })();
  
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));



//10
// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// console.log(foo1);
// console.log(foo2);

// 11
// function duplicate (arr) {
//   return [...arr, ...arr]
// }

// console.log(duplicate([1,2,3,4,5]));


//12
// for(let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

//13
// console.log("hello" || "world")
// console.log("foo" && "bar")

//14 Write an immediately invoked function expression (IIFE)
// (function () {
//   console.log("This is an IIFE!");
// })()

