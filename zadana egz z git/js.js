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
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log(foo1);
console.log(foo2);