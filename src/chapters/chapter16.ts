// attempt 1
export class Money implements Expression {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  public get amount(): number {
    return this._amount;
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
      this._amount === money._amount && this._currency === money.currency()
    );
  }

  public times(multiplier: number): Expression {
    return new Money(this._amount * multiplier, this._currency);
  }

  public currency(): string {
    return this._currency;
  }

  public toString() {
    return `${this._amount} ${this._currency}`;
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  public reduce(bank: Bank, to: string) {
    const rate = bank.rate(this._currency, to);
    return new Money(this._amount / rate, to);
  }
}

export interface Expression {
  reduce(bank: Bank, to: string): Money;
  plus(addend: Expression): Expression;
  times(multiplier: number): Expression;
}

export class Bank {
  private rates: Map<number, number> = new Map();

  public reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  public rate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }
    return this.rates.get(new Pair(from, to).hashCode());
  }

  public addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).hashCode(), rate);
  }
}

export class Sum implements Expression {
  public augend: Expression;
  public addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(bank: Bank, to: string) {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  public times(multiplier: number): Expression {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
  }
}

class Pair {
  private from: string;
  private to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  public equals(object: Object) {
    const pair = object as Pair;
    return this.from === pair.from && this.to === pair.to;
  }

  public hashCode(): number {
    return 0;
  }
}

