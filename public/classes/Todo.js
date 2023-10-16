export class Todo {
    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
    toggleCompletion() {
        this.completed = !this.completed;
        return this.completed;
    }
    updateTitle() {
        this.title = `Chapter ${this.id}`;
        return this.title;
    }
}
