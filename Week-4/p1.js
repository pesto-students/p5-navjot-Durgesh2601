//function for getting a random number
const getRandomNumber = () => {
  return Math.floor(Math.random() * 500);
};

//function to check if given number is divisible by 5 or not
const checkIsDivisible = (num) => {
  if (num % 5 === 0) {
    return true;
  } else {
    return false;
  }
};

const promiseStates = {
    pending : 0, fulfilled : 1, rejected : 2, 
}

function customPromise(arg) {
  const { pending, fulfilled, rejected } = promiseStates;
  let state = pending;
  let value;
  let executionTime;

  function resolve(result) {
    console.time();
    state = fulfilled;
    value = result;
    executionTime = console.timeEnd();
  }
  function reject(err) {
    console.time();
    state = rejected;
    value = err;
    executionTime = console.timeEnd();
  }
  this.then = function (success) {
    if (state === fulfilled) {
      success(value);
    }
    return this;
  };
  this.catch = function (failure) {
    if (state === rejected) {
      failure(value);
    }
    return this;
  };
  arg(resolve, reject);
}

let promise1 = new customPromise((resolve, reject) => {
  const randomNumber = getRandomNumber();
  if (checkIsDivisible(randomNumber)) {
    reject(
      `The promise is rejected because the number ${randomNumber} is divisible by 5`
    );
  } else {
    resolve(
      `The promise is resolved because the number ${randomNumber} is not divisible by 5`,
    );
  }
});
let promise2 = new customPromise((resolve, reject) => {
  let randomNumber = getRandomNumber();
  if (checkIsDivisible(randomNumber)) {
    reject(
      `The promise is rejected because the number ${randomNumber} is divisible by 5`
    );
  } else {
    resolve(
      `The promise is resolved because the number ${randomNumber} is not divisible by 5`
    );
  }
});

promise1
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.error(data);
  });
promise2
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.error(data);
  });
