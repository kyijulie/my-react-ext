import React, { Component } from "react";
import Todo from "./components/Todo.js";
//import List from "./components/List.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: "todo",
      screenshot: "",
      toggle: false
    };
    this.toggleList = this.toggleList.bind(this);
  }
  componentDidMount() {}

  toggleList() {
    if (this.state.toggle === false) {
      let navs = document.querySelectorAll("#navbar-link");
      navs.forEach(nav => {
        nav.setAttribute("id", "navbar-link-toggle");
      });
      this.setState({
        toggle: !this.state.toggle
      });
    } else {
      let navs = document.querySelectorAll("#navbar-link-toggle");
      navs.forEach(nav => {
        nav.setAttribute("id", "navbar-link");
      });
      this.setState({
        toggle: !this.state.toggle
      });
    }
  }

  render() {
    return (
      <div id="main">
        <div id="todo-nav">
          Todo
          <div id="container">
            <Todo />
          </div>
        </div>
        <div id="navbar">
          <div id="list-nav">
            <a
              id="list-title"
              data-toggle="dropdown"
              href="#"
              onClick={this.toggleList}
            >
              &#9776;
            </a>
            <div id="navbar-link">
              <a href="#">Page 1-1</a>
            </div>
            <div id="navbar-link">
              <a href="#">Page 1-2</a>
            </div>
            <div id="navbar-link">
              <a href="#">Page 1-3</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
