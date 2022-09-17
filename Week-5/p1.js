//promise function
const makePromise = (str) => {
  const timeOut = getTimeOut(str);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`The ${str} promise is resolved`);
    }, timeOut);
  });
};

//function to get timeout
const getTimeOut = (str) => {
  switch (str) {
    case "first":
      return 1000;
    case "second":
      return 2000;
    case "third":
      return 3000;
    default:
      return 1000;
  }
};

const doTask1 = async () => {
  const result = await makePromise(`first`);
  console.log(result);
};
const doTask2 = async () => {
  const result = await makePromise(`second`);
  console.log(result);
};
const doTask3 = async () => {
  const result = await makePromise(`third`);
  console.log(result);
};

function* genrator_func() {
  yield doTask1();
  yield doTask2();
  yield doTask3();
}

let response = genrator_func();
response.next();
response.next();
response.next();

//for(let i = 0; i < 3; i++){
// response.next();
//}