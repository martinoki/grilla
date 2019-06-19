import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleStates: ["Posición 1", "B", "C", "D", "E", "F", "G"],
      defaultState: 0,
      rows: 2,
      cols: 3,
      table: [0, 0, 0, 0, 0, 0]
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
    if(oldValue <5)
      updatedTable[nCol + this.state.cols * nRow] = oldValue+1;
    else
      updatedTable[nCol + this.state.cols * nRow] = 0;

    // let newValue =
    //   index == this.state.possibleStates.length - 1
    //     ? this.state.possibleStates[0]
    //     : this.state.possibleStates[index + 1];
    // updatedTable[nCol + this.state.cols * nRow] = newValue;
    this.setState({ table: updatedTable });
  };

  onChange = e => {
    let updatedState = { ...this.state };
    updatedState[e.target.id] = e.target.value;
    this.setState(updatedState);
  };

  render() {
    return (
      <div
        style={{ padding: "5px", display: "flex", justifyContent: "center" }}
      >
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
