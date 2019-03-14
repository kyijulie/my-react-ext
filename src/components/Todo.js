import React, { Component } from "react";
import TodoEntry from "./TodoEntry.js";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
      name: this.props.navName
    };
    this.changeInput = this.changeInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);

    this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(
      this
    );
  }
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    if (this.state.title === "New Todo") {
      this.setState({
        todos: []
      });
    }
  }
  componentDidUpdate(prevProps) {
    //console.log("update", this.props.navName, prevProps.navName);
    if (this.props.navName !== prevProps.navName) {
      this.setState(
        {
          name: this.props.navName
        },
        () => {
          this.hydrateStateWithLocalStorage();
        }
      );
    }
  }
  changeInput(e) {
    this.setState({
      todo: e.target.value
    });
  }
  submitInput(e) {
    e.preventDefault();
    if (this.state.todo === "") {
      return false;
    } else {
      this.setState(
        {
          todos: [...this.state.todos, this.state.todo],
          todo: ""
        },
        () => {
          let storage = this.state.todos;

          localStorage.setItem(this.state.name, JSON.stringify(storage));
          console.log(localStorage);
        }
      );
    }

    document.getElementById("todoform").reset();
  }
  hydrateStateWithLocalStorage() {
    console.log("this is navName", this.state.name);
    if (localStorage.hasOwnProperty(this.state.name)) {
      let value = localStorage.getItem(this.state.name) || [];
      value = JSON.parse(value);
      this.setState({
        todos: value
      });
    }
  }
  deleteEntry(id, entry) {
    console.log(entry);
    const list = [...this.state.todos];
    list.splice(id, 1);
    this.setState({
      todos: list
    });

    localStorage.setItem(this.state.name, JSON.stringify(list));
  }
  render() {
    return (
      <div id="todobox">
        <div id="formInput">
          <form id="todoform">
            <input
              type="text"
              id="todoinput"
              placeholder="Add Task"
              onChange={this.changeInput}
            />
            <button id="click" onClick={this.submitInput} />
          </form>
        </div>
        <div id="todo">
          <ul id="todoentry">
            {this.state.todos.map((entry, index) => (
              <TodoEntry
                index={index}
                entry={entry}
                delete={this.deleteEntry}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
