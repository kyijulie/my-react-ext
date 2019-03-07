import React, { Component } from "react";
import Todo from "./components/Todo.js";
import List from "./components/List.js";
//import html2canvas from "html2canvas";
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

  // screenShot() {
  //   html2canvas(document.querySelector("#main")).then(canvas => {
  //     // canvas.setAttribute("width", 177);
  //     // canvas.setAttribute("height", 220);
  //     canvas.setAttribute("style", "width: 177px, height: 220px");
  //     this.setState({
  //       screenshot: canvas
  //     });
  //   });
  //   // html2canvas(document.getElementById("main")).then(canvas => {
  //   //   var tempcanvas = document.createElement("canvas");
  //   //   tempcanvas.width = 350;
  //   //   tempcanvas.height = 350;
  //   //   var context = tempcanvas.getContext("2d");
  //   //   context.drawImage(canvas, 112, 0, 288, 200, 0, 0, 350, 350);
  //   //   console.log(context);
  //   //   this.setState({
  //   //     screenshot: context
  //   //   });
  //   // });
  // }
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
      // container = <List />;
    }
    return (
      <div id="main">
        <div id="navbar">
          <a id="todo-nav" href="#" onClick={this.changeToTodo}>
            Todo
          </a>
          <a
            id="list-nav"
            data-toggle="dropdown"
            href="#"
            onClick={this.changeToList}
          >
            &#9776;
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="#">Page 1-1</a>
            </li>
            <li>
              <a href="#">Page 1-2</a>
            </li>
            <li>
              <a href="#">Page 1-3</a>
            </li>
          </ul>
        </div>
        <div id="container">{container}</div>
      </div>
    );
  }
}
export default App;
