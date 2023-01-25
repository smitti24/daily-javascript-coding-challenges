"use strict";

/* 
Generall Challenges
============================

*/
//  - Explain how a closure works and how a setTimeout works

// function x() {
//   var i = 2;

//   console.log(1)
//   setTimeout(function() {
//     console.log(i);
//   }, 0);

//   console.log(3)
// }

// x(); // => 1 3 2

// function inside setTimeout creates a closure and takes the context of i with it.
// setTimeout does not cause javascript to wait. Its asynchronous. So only when the timer runs out, JS Event Loop will attach the function to the call stack.

// Closure is a function along with its lexical environment.

// Print a number every second issue:

// function y() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     })
//   }
// }

// y(); //  print 6 5 times, because var is stored in memory and hoisted to the top of the call stack. Javascript doesnt wait so because of closure, the inner console log has access to the in memory value of i which is 6.

// To fix this issue:
// function a() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     })
//   }
// }

// a(); // Let has a block scope, so that means for every loop iteration, i will be a completely new variable (a new copy) so, the inner closure, will have a new copy of i stored with it.

// What if i cant use let, only use var. So Closures can help us with this.

// function b() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function() {
//         console.log(x);
//       }, x * 1000)
//     }
//     close(i);
   
//   }
// }

// b();
