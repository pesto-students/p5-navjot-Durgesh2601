const mathOperations = require("./p4");

describe("Calculator Test Cases", () => {
  test("Adding 4 and 5 should return 9", () => {
    const sum_result = mathOperations.add(4, 5);
    expect(sum_result).toBe(9);
  });
  test("Subtracting 4 from 5 should return -1", () => {
    const sub_result = mathOperations.substract(4, 5);
    expect(sub_result).toBe(-1);
  });
  test("Multiplying 4 and 5 should return 20", () => {
    const product_result = mathOperations.product(4, 5);
    expect(product_result).toBe(20);
  });
});
