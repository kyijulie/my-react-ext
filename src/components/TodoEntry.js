import React, { Component } from "react";

class TodoEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
    //this.strikeThroughEntry = this.strikeThroughEntry.bind(this);
    this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(
      this
    );
  }
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    //localStorage.setItem(this.props.entry, this.state.flag);
  }
  hydrateStateWithLocalStorage() {
    // if (localStorage.hasOwnProperty(this.props.entry)) {
    //   let value = localStorage.getItem(this.props.entry);
    //   this.setState({
    //     flag: value
    //   });
    // }
    // console.log(localStorage);
  }
  // strikeThroughEntry() {
  //   this.setState(
  //     {
  //       flag: !this.state.flag
  //     },
  //     () => {
  //       localStorage.setItem(this.props.entry, this.state.flag);
  //     }
  //   );
  // }
  render() {
    return (
      <li id="entry">
        <span
          onDoubleClick={() =>
            this.props.delete(this.props.index, this.props.entry)
          }
        >
          {this.props.entry}
        </span>
      </li>
    );
  }
}

export default TodoEntry;
