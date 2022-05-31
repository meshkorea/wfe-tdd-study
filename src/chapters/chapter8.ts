/*
// attempt 1
class Money {
  protected amount: number;

  public equals(object: Object) {
    const money = object as Money;
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
*/

// attempt 2
export abstract class Money {
  protected amount: number;

  public static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  public static franc(amount: number): Franc {
    return new Franc(amount);
  }

  public equals(object: Object) {
    const money = object as Money;
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  public abstract times(multiplier: number): Money;
}

export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
