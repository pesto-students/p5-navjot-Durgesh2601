const promise_obj = new Promise((resolve, reject) => {
  resolve(`The promise -  is resolved`);
});
// const secondFunction = () => {
//   return new Promise((res, rej) => {
//     res("Done with task 2");
//   });
// };

// const thirdFunction = () => {
//   return new Promise((res, rej) => {
//     res("Done with task 3");
//   })
// };

const doTask1 = async () => {
  let result = await promise_obj;
  //let data = await result;
  //return data;
  return result;
};

const doTask2 = async () => {
  let result = await secondFunction();
  let data = await result;
  return data;
};
console.log(doTask1());
const doTask3 = async () => {
  let result = await thirdFunction();
  let data = await result;
  return data;
};

function* genrator_func() {
  yield doTask1();
  yield doTask2();
  yield doTask3();
}

let response = genrator_func();
// console.log(response.next());
// console.log(response.next());
// console.log(response.next());


