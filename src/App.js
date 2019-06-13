import React, { Component } from "react";
import "./App.css";
import Table from "./containers/Table/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleStates: [" ", "X", "O"],
      defaultState: " ",
      rows: 5,
      cols: 4,
      table: []
    };
  }

  componentDidMount() {
    let newArray = new Array(this.state.rows * this.state.cols);
    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = " ";
    }
    newArray.forEach(element => {
      element = this.state.defaultState;
    });
    this.setState({ table: newArray });
  }

  onClick = (nRow, nCol) => {
    console.log(nRow, nCol);
    let updatedTable = [...this.state.table];
    let oldValue = updatedTable[nCol + this.state.cols * nRow];
    let index = this.state.possibleStates.findIndex(item => item == oldValue);
    let newValue =
      index == this.state.possibleStates.length-1
        ? this.state.possibleStates[0]
        : this.state.possibleStates[index + 1];
    updatedTable[nCol + this.state.cols * nRow] = newValue;
    this.setState({ table: updatedTable });
  };

  onChange = e => {
    let updatedState = { ...this.state };
    updatedState[e.target.id] = e.target.value;
    this.setState(updatedState);
  };

  render() {
    return (
      <div style={{ padding: "5px" }}>
        <Table
          possibleStates={this.state.states}
          onClick={this.onClick}
          rows={this.state.rows}
          cols={this.state.cols}
          table={this.state.table}
        />
      </div>
    );
  }
}

export default App;
