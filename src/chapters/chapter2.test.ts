import { Dollar } from "./chapter2";

// attempt 1
describe("chapter 2", () => {
  test("multiplication", () => {
    const five = new Dollar(5);

    let product = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });
});
