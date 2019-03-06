import React, { Component } from "react";
import ListEntry from "./ListEntry.js";

import "./List.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageNames: [],
      screenshot: ""
    };
    this.getStorageNames = this.getStorageNames.bind(this);
  }
  componentDidMount() {
    this.getStorageNames();
  }

  getStorageNames() {
    let archive = [];
    let keys = Object.keys(localStorage);
    let i = 0;
    let key;

    for (; (key = keys[i]); i++) {
      archive.push(key);
    }
    this.setState(
      {
        storageNames: archive
      },
      () => {
        console.log(this.state.storageNames);
      }
    );
  }
  render() {
    return (
      <div id="list">
        <div id="box ">
          <button id="listbutton">Add a new Todo</button>
        </div>
        {/* {this.state.storageNames.map(storagekey => (
          <ListEntry />
        ))} */}
        <div id="box box1" />
      </div>
    );
  }
}
