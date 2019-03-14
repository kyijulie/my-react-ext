import React, { Component } from "react";
import Todo from "./components/Todo.js";
import EditPic from "./pictures/edit-icon-png-24.png";
import "./App.css";

let oldList;
let oldStorage;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: "todo",
      toggle: false,
      navLists: [],
      title: "Todo"
    };
    this.showEdit = this.showEdit.bind(this);
    this.hideEdit = this.hideEdit.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.submitTitle = this.submitTitle.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.getNavList = this.getNavList.bind(this);
    this.changeToNewTodo = this.changeToNewTodo.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.collapseList = this.collapseList.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }
  componentDidMount() {
    this.getNavList();
    setTimeout(() => {
      this.setState({
        title: this.state.navLists[0]
      });
    }, 50);
  }
  // componentDidUpdate() {
  //   this.getNavList;
  // }
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
    if (navName === "new") {
      this.setState({
        title: "New Todo"
      });
      let newTodo = [];
      localStorage.setItem("New Todo", JSON.stringify(newTodo));
      this.getNavList();
    } else {
      this.setState({
        title: navName
      });
    }

    this.collapseList();
  }
  collapseList() {
    let dropdown = document.getElementById("dropdown1");
    dropdown.style.display = "none";
  }

  editTitle() {
    let input = document.getElementById("form");
    input.style.display = "flex";
    let title = document.getElementById("title");
    title.style.display = "none";
    oldList = this.state.title;
    oldStorage = localStorage.getItem(oldList);
  }
  submitTitle(e) {
    e.preventDefault();
    let input = document.getElementById("form");
    input.style.display = "none";
    let title = document.getElementById("title");
    title.style.display = "flex";
    localStorage.removeItem(oldList);
    if (oldStorage === null) {
      let empty = [];
      oldStorage = JSON.stringify(empty);
    }
    localStorage.setItem(this.state.title, oldStorage);
    this.getNavList();
  }
  changeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  showEdit() {
    let edit = document.getElementById("edit");
    edit.style.display = "inline-block";
  }
  hideEdit() {
    let edit = document.getElementById("edit");
    edit.style.display = "none";
  }
  deleteList(navName) {
    localStorage.removeItem(navName);
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
                <a href="#" onClick={() => this.changeToNewTodo("new")}>
                  + new list
                </a>
              </li>
              {this.state.navLists.map(navName => (
                <li id="navbar-link">
                  <a
                    href="#"
                    onClick={() => this.changeToNewTodo(navName)}
                    onDoubleClick={() => this.deleteList(navName)}
                  >
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
          <div
            id="title"
            onMouseOver={this.showEdit}
            onMouseLeave={this.hideEdit}
          >
            {this.state.title}
            <div onClick={this.editTitle} id="edit">
              <img src={EditPic} id="editpic" />
            </div>
          </div>

          <div id="form">
            <form id="formTitle">
              <input
                id="editTitle"
                type="text"
                placeholder={this.state.title}
                onChange={this.changeTitle}
              />
              <button id="click" onClick={this.submitTitle} />
            </form>
          </div>
          <div id="container">
            <Todo navName={this.state.title} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
