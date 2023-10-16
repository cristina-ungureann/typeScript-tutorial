export class Savings {
    constructor(owner, details, amount) {
        this.owner = owner;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.owner} has saved £${this.amount} for ${this.details}`;
    }
}
