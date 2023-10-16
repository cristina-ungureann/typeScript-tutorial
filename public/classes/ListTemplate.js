/*
1. register a list container (ul) in the constructor
2. create a rander method to rander a new 'li' to the container
 -- accepts arguments: invoice or payment, a heading, a position
 -- create the html template (li, h4, p)
 -- add the "li" template to the start/ end of the list */
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
