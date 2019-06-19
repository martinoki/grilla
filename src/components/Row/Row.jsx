import React, { Component } from "react";

class Row extends Component {
  componentDidMount() {}

  render() {
    let cols = [];
    for (let nCol = 0; nCol < this.props.cols; nCol++) {
      let value = this.props.table[nCol + this.props.cols * this.props.nRow];
      cols.push(
        <td
          unselectable="on"
          style={{
            border: "solid 1px black",
            width: "50px",
            height: "50px",
            textAlign: "center",
            cursor: "pointer",
            padding: "0"
          }}
          key={nCol}
          onClick={() => {
            this.props.onClick(this.props.nRow, nCol);
          }}
        >
          <button
            style={{
              width: "100%",
              height: "100%",
              fontSize: "20px",
              cursor: "pointer"
            }}
          >
            {this.props.possibleStates[value]}
          </button>
        </td>
      );
    }
    return <tr>{cols}</tr>;
  }
}
export default Row;
