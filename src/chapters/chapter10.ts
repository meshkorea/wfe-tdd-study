// attempt 1
export class Money {
  protected amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
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
      this._currency === money.currency()
    );
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  };

  public currency(): string {
    return this._currency;
  }

  public toString() {
    return `${this.amount} ${this._currency}`;
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
