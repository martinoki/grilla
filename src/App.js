import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import o from "./images/x.png";
import x from "./images/o.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleStates: ["", o, x],
      rows: 3,
      cols: 3,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  }

  componentDidMount() {}

  onClick = (nRow, nCol) => {
    let updatedTable = [...this.state.data];
    let oldValue = updatedTable[nCol + this.state.cols * nRow];
    if (oldValue < 2) {
      updatedTable[nCol + this.state.cols * nRow] = oldValue + 1;
    } else {
      updatedTable[nCol + this.state.cols * nRow] = 1;
    }

    this.setState({ data: updatedTable });
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
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
