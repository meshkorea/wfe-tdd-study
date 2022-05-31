import { Dollar } from "./chapter1";

// attempt 1 ~ 3
describe("chapter 1", () => {
  test("multiplication", () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
