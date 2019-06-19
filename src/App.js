import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleStates: [0, 1, 2, 3, 4, 5, 6],
      defaultState: 0,
      rows: 3,
      cols: 2,
      table: [0, 0, 0, 0, 0, 0 ]
    };
  }

  componentDidMount() {
    // let newArray = new Array(this.state.rows * this.state.cols);
    // for (let i = 0; i < newArray.length; i++) {
    //   newArray[i] = " ";
    // }
    // newArray.forEach(element => {
    //   element = this.state.defaultState;
    // });
    // console.log(newArray)
    // this.setState({ table: newArray });
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
      <div style={{ padding: "5px", display: 'flex', justifyContent: 'center' }}>
        <Table
          possibleStates={this.state.possibleStates}
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
