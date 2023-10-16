import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
import { Savings } from "./classes/Savings.js";
import { HasFormatter } from "./interfaces.ts/HasFormatter.js";




document.addEventListener("DOMContentLoaded", () => {
// list template instance 
const ul = document.querySelector('ul')!;
const list  = new ListTemplate(ul);

    const form = document.querySelector('.new-item-form') as HTMLFormElement;
    const type = document.querySelector('#type') as HTMLSelectElement;
    const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
    const details = document.querySelector('#details') as HTMLInputElement;
    const amount = document.querySelector('#amount') as HTMLInputElement;
  
    form.addEventListener('submit', (e: Event) => {
      e.preventDefault();
  
      let doc: HasFormatter;
      if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, parseFloat(amount.value));
      } else if (type.value === 'payment') {
        doc = new Payment(tofrom.value, details.value, parseFloat(amount.value));
      } else {
        doc = new Savings(tofrom.value, details.value, parseFloat(amount.value));
      }
      list.render(doc, type.value, 'end')
      
    });
  });
  

