import React, { Component } from "react";
import TodoEntry from "./TodoEntry.js";
import html2canvas from "html2canvas";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: []
    };
    this.changeInput = this.changeInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.screenShot = this.screenShot.bind(this);
    this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(
      this
    );
  }
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    this.screenShot();
  }
  screenShot() {
    html2canvas(document.querySelector("#main")).then(canvas => {
      document.getElementById("box box1").appendChild(canvas);
    });
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
          localStorage.setItem("list", JSON.stringify(storage));
        }
      );
    }

    document.getElementById("todoform").reset();
  }
  hydrateStateWithLocalStorage() {
    if (localStorage.hasOwnProperty("list")) {
      let value = localStorage.getItem("list");
      value = JSON.parse(value);
      this.setState({
        todos: value
      });
    }
  }
  deleteEntry(id) {
    const list = [...this.state.todos];
    list.splice(id, 1);
    this.setState({
      todos: list
    });
    localStorage.setItem("list", JSON.stringify(list));
  }
  render() {
    return (
      <div id="todobox">
        <div id="formInput">
          <form id="todoform">
            <input
              type="text"
              id="todo"
              placeholder="Add Todo"
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
