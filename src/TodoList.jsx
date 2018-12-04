import React from "react";
import { decorate } from 'mobx';
import { observer } from "mobx-react";


class TodoList extends React.Component {
  createNewTask = (e)  => {

    if (e.which === 13) {
      this.props.store.newTask(e.target.value);
      e.target.value = "";
    }

  }

  toggleComplete = (task) => {task.complete = !task.complete};
  

  render() {
    const { showAll, showActive, showDone, todos} = this.props.store;

    const todoList = todos.map(task => (
      <li key={task.id}>
       <input
          type="checkbox"
          onChange={this.toggleComplete.bind(this, task)}
          value={task.complete}
          defaultChecked={task.complete}
        />
       <span>{task.value}</span>
      </li>
    ))

    return (
      <div>
        <h1>TODO</h1>
        <input
          className="new"
          onKeyPress={this.createNewTask}
          placeholder="add new task"
        />
        <ul>{todoList}</ul>
        <button onClick={showAll}>All</button>
        <button onClick={showActive}>Active</button>
        <button onClick={showDone}>Done</button>
      </div>
    );
  }
}


decorate(TodoList, {
  TodoList: observer,
});

export default TodoList;