export class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return `${this.firstName} is ${this.age}  years old.`;
    }
    getEmail() {
        return `Contact at: ${this.email} `;
    }
}
