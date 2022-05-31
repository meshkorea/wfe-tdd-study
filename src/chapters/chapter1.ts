/*
// attempt 1
export class Dollar {
  public amount: number = 10;

  constructor(amount: number) {
    //
  }

  public times(multiplier: number) {
    //
  }
}
*/

/*
// attempt 2
export class Dollar {
  public amount: number;

  constructor(amount: number) {
    //
  }

  public times(multiplier: number) {
    this.amount = 5 * 2;
  }
}
*/

// attempt 3
export class Dollar {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number) {
    this.amount = this.amount * multiplier;
  }
}
