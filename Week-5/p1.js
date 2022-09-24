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
  return result;
  //console.log(result);
};
const doTask2 = async () => {
  const result = await makePromise(`second`);
  return result;
  //console.log(result);
};
const doTask3 = async () => {
  const result = await makePromise(`third`);
  return result;
  //console.log(result);
};

async function* genrator_func() {
  yield await doTask1();
  yield await doTask2();
  yield await doTask3();
}
const temp = async() => {
  let response = genrator_func();
  const t1 = await response.next();
  console.log(t1);
  // console.log(await response.next());
  console.log(await response.next());
  console.log(await response.next());
}
temp();