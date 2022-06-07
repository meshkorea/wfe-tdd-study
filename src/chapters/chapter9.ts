/*
// attempt 1
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

  public abstract currency(): string;
}

export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }

  public currency() {
    return "USD";
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

  public currency() {
    return "CHF";
  }
}
*/

/*
// attempt 2
export abstract class Money {
  protected amount: number;
  protected _currency: string;

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

  public currency(): string {
    return this._currency;
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
    this._currency = "USD";
  }

  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
    this._currency = "CHF";
  }

  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
*/

// attempt 3
export abstract class Money {
  protected amount: number;
  protected _currency: string;

  constructor (amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  public static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  public static franc(amount: number): Franc {
    return new Franc(amount, "CHF");
  }

  public equals(object: Object) {
    const money = object as Money;
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  public abstract times(multiplier: number): Money;

  public currency(): string {
    return this._currency;
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  public times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  public times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
