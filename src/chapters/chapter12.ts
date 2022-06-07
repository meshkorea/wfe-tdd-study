// attempt 1
export class Money implements Expression {
  protected amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  public static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  public static franc(amount: number): Money {
    return new Money(amount, "CHF");
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

  public plus(added: Money): Expression {
    return new Money(this.amount + added.amount, this._currency);
  }
}

export interface Expression {}

export class Bank {
  public reduce(source: Expression, to: string): Money {
    return Money.dollar(10);
  }
}
