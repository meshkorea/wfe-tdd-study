// attempt 1
export class Dollar {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}
