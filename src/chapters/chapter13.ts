/*
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
  };

  public static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  public static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  public equals(object: Object) {
    const money = object as Money;
    return this._amount === money._amount && this._currency === money.currency();
  }

  public times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  public currency(): string {
    return this._currency;
  }

  public toString() {
    return `${this._amount} ${this._currency}`;
  }

  public plus(addend: Money): Sum {
    return new Sum(this, addend);
  }
}

export interface Expression {}

export class Bank {
  public reduce(source: Expression, to: string): Money {
    const sum = source as Sum;
    return sum.reduce(to);
  }
}

export class Sum implements Expression {
  public augend: Money;
  public addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(to: string) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
*/

/*
// attempt 2
export class Money implements Expression {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  public get amount(): number {
    return this._amount;
  };

  public static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  public static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  public equals(object: Object) {
    const money = object as Money;
    return this._amount === money._amount && this._currency === money.currency();
  }

  public times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  public currency(): string {
    return this._currency;
  }

  public toString() {
    return `${this._amount} ${this._currency}`;
  }

  public plus(addend: Money): Sum {
    return new Sum(this, addend);
  }
}

export interface Expression {}

export class Bank {
  public reduce(source: Expression, to: string): Money {
    if (source instanceof Money) {
      return source;
    }

    const sum = source as Sum;
    return sum.reduce(to);
  }
}

export class Sum implements Expression {
  public augend: Money;
  public addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(to: string) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
*/

// attempt 3
export class Money implements Expression {
  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  public get amount(): number {
    return this._amount;
  };

  public static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  public static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  public equals(object: Object) {
    const money = object as Money;
    return this._amount === money._amount && this._currency === money.currency();
  }

  public times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  public currency(): string {
    return this._currency;
  }

  public toString() {
    return `${this._amount} ${this._currency}`;
  }

  public plus(addend: Money): Sum {
    return new Sum(this, addend);
  }

  public reduce(to: string) {
    return this;
  }
}

export interface Expression {
  reduce(to: string): Money;
}

export class Bank {
  public reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}

export class Sum implements Expression {
  public augend: Money;
  public addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(to: string) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
