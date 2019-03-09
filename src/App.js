import React, { Component } from "react";
import Todo from "./components/Todo.js";
//import List from "./components/List.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: "todo",
      toggle: false
    };
    this.toggleList = this.toggleList.bind(this);
    this.collapseList = this.collapseList.bind(this);
  }
  componentDidMount() {}

  toggleList() {
    // if (this.state.toggle === false) {
    //   let navs = document.querySelectorAll("#navbar-link");
    //   navs.forEach(nav => {
    //     nav.setAttribute("id", "navbar-link-toggle");
    //   });
    //   this.setState({
    //     toggle: !this.state.toggle
    //   });
    // } else {
    //   let navs = document.querySelectorAll("#navbar-link-toggle");
    //   navs.forEach(nav => {
    //     nav.setAttribute("id", "navbar-link");
    //   });
    //   this.setState({
    //     toggle: !this.state.toggle
    //   });
    // }
    let dropdown = document.getElementById("dropdown1");
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }
  collapseList() {
    let dropdown = document.getElementById("dropdown1");
    dropdown.style.display = "none";
  }
  render() {
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
              <li id="navbar-link">
                <a href="#">Page 1-2</a>
              </li>
              <li id="navbar-link">
                <a href="#">Page 1-3</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="todo-nav" onClick={this.collapseList}>
          Todo
          <div id="container">
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
