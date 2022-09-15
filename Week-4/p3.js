const getFibonacci = (num) => {
  let i = 0;
  let currentTarget = i;
  let nextTarget = i + 1;
  const obj = {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (i === 0) {
        i++;
        return { value: 0, done: i > num };
      }
      if (i === 1) {
        i++;
        return { value: 1, done: i > num };
      }
      if (i >= 2) {
        i++;
        let sum = currentTarget + nextTarget;
        currentTarget = nextTarget;
        nextTarget = sum;
        return { value: sum, done: i > num };
      }
    },
  };
  return obj;
};

for (const element of getFibonacci(7)) {
  if (element === 0) {
    console.log("The Fibonacci Series is :");
  }
  console.log(element);
}
