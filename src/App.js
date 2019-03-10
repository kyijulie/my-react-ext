import React, { Component } from "react";
import Todo from "./components/Todo.js";
//import List from "./components/List.js";
import "./App.css";
let container;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: "todo",
      toggle: false,
      navLists: []
    };
    this.getNavList = this.getNavList.bind(this);
    this.changeToNewTodo = this.changeToNewTodo.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.collapseList = this.collapseList.bind(this);
  }
  componentDidMount() {
    this.getNavList();
  }
  getNavList() {
    let navlist = Object.keys(localStorage);
    this.setState({
      navLists: navlist
    });
  }

  toggleList() {
    let dropdown = document.getElementById("dropdown1");
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }
  changeToNewTodo(navName = "newTodo") {
    container = <Todo navName={navName} />;
  }
  collapseList() {
    let dropdown = document.getElementById("dropdown1");
    dropdown.style.display = "none";
  }
  render() {
    container = <Todo navName="newTodo" />;
    return (
      <div id="main">
        <div id="navbar">
          <div id="list-nav" className="dropdown">
            <a
              id="list-title"
              data-toggle="dropdown"
              href="#"
              onClick={this.toggleList}
            >
              &#9776;
            </a>

            <ul id="dropdown1">
              <li id="navbar-link">
                <a href="#">+ Add a new todo</a>
              </li>
              {this.state.navLists.map(navName => (
                <li id="navbar-link">
                  <a href="#" onClick={() => this.changeToNewTodo(navName)}>
                    {navName}
                  </a>
                </li>
              ))}
              {/* <li id="navbar-link">
                <a href="#" onClick={this.changeToNewTodo}>list</a>
              </li>
              <li id="navbar-link">
                <a href="#" onClick={this.changeToNewTodo}>Page 1-3</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div id="todo-nav" onClick={this.collapseList}>
          Todo
          <div id="container">{container}</div>
        </div>
      </div>
    );
  }
}
export default App;
