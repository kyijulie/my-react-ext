import React, { Component } from "react";

class TodoEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
    this.strikeThroughEntry = this.strikeThroughEntry.bind(this);
    //this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(
    //this
    //);
  }
  componentDidMount() {
    //this.hydrateStateWithLocalStorage();
  }
  // hydrateStateWithLocalStorage() {
  //   if (localStorage.hasOwnProperty(this.props.entry)) {
  //     let value = localStorage.getItem(this.props.entry);
  //     this.setState({
  //       flag: value
  //     });
  //   }
  // }
  strikeThroughEntry() {
    this.setState({
      flag: !this.state.flag
    });
  }
  render() {
    return (
      <li id="entry">
        <span
          style={{ textDecoration: this.state.flag ? "line-through" : "none" }}
          onClick={() => this.strikeThroughEntry()}
          onDoubleClick={() => this.props.delete(this.props.index)}
        >
          {this.props.entry}
        </span>
      </li>
    );
  }
}

export default TodoEntry;
