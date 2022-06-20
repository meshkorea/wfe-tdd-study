import { Bank, Money } from "./chapter13";
import type { Expression } from "./chapter13";
import { Sum } from "./chapter13";

/*
// attempt 1
describe("chapter 13", () => {
  test("multiplication", () => {
    const five: Money = Money.dollar(5);
    expect(Money.dollar(10)).toEqual(five.times(2));
    expect(Money.dollar(15)).toEqual(five.times(3));
  });

  test("francMultiplication", () => {
    const five = Money.franc(5);
    expect(Money.franc(10)).toEqual(five.times(2));
    expect(Money.franc(15)).toEqual(five.times(3));
  });

  test("equality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  test("currency", () => {
    expect(Money.dollar(1).currency()).toBe("USD");
    expect(Money.franc(1).currency()).toBe("CHF");
  });

  test("simpleAddition", () => {
    const five = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD");
    expect(Money.dollar(10)).toEqual(reduced);
  });

  test("plusReturnsSum", () => {
    const five = Money.dollar(5);
    const result = five.plus(five);
    const sum: Sum = result;

    expect(five).toEqual(sum.augend);
    expect(five).toEqual(sum.addend);
  });

  test("reduceSum", () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(Money.dollar(7)).toEqual(result);
  });
});
*/

// attempt 2
describe("chapter 13", () => {
  test("multiplication", () => {
    const five: Money = Money.dollar(5);
    expect(Money.dollar(10)).toEqual(five.times(2));
    expect(Money.dollar(15)).toEqual(five.times(3));
  });

  test("francMultiplication", () => {
    const five = Money.franc(5);
    expect(Money.franc(10)).toEqual(five.times(2));
    expect(Money.franc(15)).toEqual(five.times(3));
  });

  test("equality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  test("currency", () => {
    expect(Money.dollar(1).currency()).toBe("USD");
    expect(Money.franc(1).currency()).toBe("CHF");
  });

  test("simpleAddition", () => {
    const five = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD");
    expect(Money.dollar(10)).toEqual(reduced);
  });

  test("plusReturnsSum", () => {
    const five = Money.dollar(5);
    const result = five.plus(five);
    const sum: Sum = result;

    expect(five).toEqual(sum.augend);
    expect(five).toEqual(sum.addend);
  });

  test("reduceSum", () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(Money.dollar(7)).toEqual(result);
  });

  test("reduceMoney", () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(Money.dollar(1)).toEqual(result);
  });
});
