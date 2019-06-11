import React, { Component } from "react";
import "./App.css";
import Table from "./containers/Table/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: 0,
      rows: 0,
      cols: 0
    };
  }

  onClick = (row, col) => {
    console.log(row, col);
  };

  onChange = e => {
    let updatedState = { ...this.state };
    updatedState[e.target.id] = e.target.value;
    this.setState(updatedState);
  };

  render() {
    return (
      <div style={{ padding: "5px" }}>
        <div>
          <span>
            Número de estados:
            <input
              id="states"
              min="0"
              style={{ margin: "30px 10px 30px 10px", width: "50px" }}
              type="number"
              value={this.state.states}
              onChange={this.onChange}
            />
          </span>
          <span>
            Filas:
            <input
              id="rows"
              min="0"
              style={{ margin: "30px 10px 30px 10px", width: "50px" }}
              type="number"
              value={this.state.rows}
              onChange={this.onChange}
            />
          </span>
          <span>
            Columnas:
            <input
              id="cols"
              min="0"
              style={{ margin: "30px 10px 30px 10px", width: "50px" }}
              type="number"
              value={this.state.cols}
              onChange={this.onChange}
            />
          </span>
        </div>

        <Table
          states={this.state.states}
          onClick={this.onClick}
          rows={this.state.rows}
          cols={this.state.cols}
        />
      </div>
    );
  }
}

export default App;
