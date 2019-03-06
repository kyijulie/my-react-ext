import React, { Component } from "react";
import Todo from "./components/Todo.js";
import List from "./components/List.js";

import "./App.css";

let container = "";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: "todo",
      screenshot: ""
    };
    this.changeToList = this.changeToList.bind(this);
    this.changeToTodo = this.changeToTodo.bind(this);
  }
  componentDidMount() {
    this.changeToTodo();
  }

  changeToList() {
    this.setState({
      container: "list"
    });
  }
  changeToTodo() {
    this.setState({
      container: "todo"
    });
  }
  render() {
    if (this.state.container === "todo") {
      container = <Todo />;
    } else if (this.state.container === "list") {
      container = <List />;
    }
    return (
      <div id="main">
        <div id="navbar">
          <a href="#" onClick={this.changeToList}>
            List
          </a>
          <a href="#" onClick={this.changeToTodo}>
            Todo
          </a>
        </div>
        <div id="container">{container}</div>
      </div>
    );
  }
}
export default App;
