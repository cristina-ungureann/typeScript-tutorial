import { HasFormatter } from "../interfaces.ts/HasFormatter.js"


export class Savings implements HasFormatter {
    constructor(
        readonly owner: string,
        private details: string,
        public amount: number
    ){}
    format() {
        return `${this.owner} has saved £${this.amount} for ${this.details}`;
    }
    
}