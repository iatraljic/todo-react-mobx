import { decorate, observable } from "mobx"

class Task {
  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

export class TodoStore {
  todos = [];
  all = [];
  active = [];
  done = [];


  newTask(value) {
    this.all.push(new Task(value))
    this.todos.replace(this.all)
  }

  showDone = () => {
    const done = this.all.filter(task => task.complete)
    this.todos.replace(done)
  }

  showActive = () => {
    const active = this.all.filter(task => !task.complete)
    this.todos.replace(active)
  }

  showAll = () => {
    this.todos.replace(this.all)
  }
}

decorate(TodoStore, {
  todos: observable,
  active: observable,
  done: observable,
  all: observable,
}, 
Task, {
  value: observable,
  id: observable,
  complete: observable,
});

export default new TodoStore();