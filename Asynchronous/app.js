// // Synchronous
// console.log("I");
// console.log("eat");
// console.log("ice cream");
// console.log("with a");
// console.log("spoon");

// // Asynchronous
// console.log("I");
// console.log("eat");

// // setTimeout function is Asynchronous
// setTimeout(() => {
//   console.log("ice cream");
// }, 2000);

// console.log("with a");
// console.log("spoon");

// // Functions
// function one() {
//   console.log("step 1");
// }

// function two() {
//   console.log("step 2");
// }

// // These functions execute synchronously
// two();
// one();

// Callback
// function one(call_two) {
//   call_two();
//   console.log("step 1");
// }

// here function two is passed as a callback to function one
// one(two);

// function two() {
//   console.log("step 2");
// }

// Order is placed and then the production works for the example

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let order = (Fruit_index, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_index]} selected`);
//     call_production();
//   }, 2000);
// };

// // Callback Hell
// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");

//     setTimeout(() => {
//       console.log("the fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);

//         setTimeout(() => {
//           console.log("the machine is started");

//           setTimeout(() => {
//             console.log(`icecream was placed on the ${stocks.holder[0]}`);

//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was added as toppings`);

//               setTimeout(() => {
//                 console.log("serve icecream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);

// Using Promises
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} is selected`))
//   .then(() => {
//     return order(0, () => {
//       console.log("Production has started");
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log("the fruit was chopped");
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log("start the machine");
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`icecream placed on ${stocks.holder[0]}`);
//     });
//   })
//   .then(() => {
//     return order(3000, () => {
//       console.log(`${stocks.toppings[0]} is selected`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log("icecream was served");
//     });
//   })
//   .catch(() => {
//     console.log("customer left");
//   })
//   .finally(() => {
//     console.log("day ended, shop is closed");
//   });

// // Async await
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// }

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`${stocks.Fruits[0]} is selected`);

//     await time(0);
//     console.log("start the production");

//     await time(2000);
//     console.log("cut the fruit");

//     await time(1000);
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);

//     await time(1000);
//     console.log("start the machine");

//     await time(2000);
//     console.log(`icecream placed on ${stocks.holder[0]}`);

//     await time(3000);
//     console.log(stocks.toppings[0], "was selected");

//     await time(2000);
//     console.log("serve icecream");
//   } catch (err) {
//     console.log("customer left"), err;
//   } finally {
//     console.log("day ended, shop is closed");
//   }
// }

// kitchen();
