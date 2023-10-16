import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
import { Savings } from "./classes/Savings.js";
document.addEventListener("DOMContentLoaded", () => {
    // list template instance 
    const ul = document.querySelector('ul');
    const list = new ListTemplate(ul);
    const form = document.querySelector('.new-item-form');
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let doc;
        if (type.value === 'invoice') {
            doc = new Invoice(tofrom.value, details.value, parseFloat(amount.value));
        }
        else if (type.value === 'payment') {
            doc = new Payment(tofrom.value, details.value, parseFloat(amount.value));
        }
        else {
            doc = new Savings(tofrom.value, details.value, parseFloat(amount.value));
        }
        list.render(doc, type.value, 'end');
    });
});