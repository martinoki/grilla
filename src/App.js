import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleStates: [
        "",
        "https://image.shutterstock.com/image-vector/x-red-letter-made-ink-260nw-416997829.jpg",
        "data:image/jpeg;base64,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"
      ],
      rows: 4,
      cols: 4,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  }

  componentDidMount() {

  }

  onClick = (nRow, nCol) => {
    console.log(nRow, nCol);
    let updatedTable = [...this.state.data];
    let oldValue = updatedTable[nCol + this.state.cols * nRow];
    if (oldValue < 2)
      updatedTable[nCol + this.state.cols * nRow] = oldValue + 1;
    else updatedTable[nCol + this.state.cols * nRow] = 0;
    console.log(updatedTable);

    // let newValue =
    //   index == this.state.possibleStates.length - 1
    //     ? this.state.possibleStates[0]
    //     : this.state.possibleStates[index + 1];
    // updatedTable[nCol + this.state.cols * nRow] = newValue;
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
