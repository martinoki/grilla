import React, { Component } from "react";
import "./Row.css";

class Row extends Component {
  componentDidMount() {}

  render() {
    let cols = [];
    for (let nCol = 0; nCol < this.props.cols; nCol++) {
      let value = this.props.data[nCol + this.props.cols * this.props.nRow];
      cols.push(
        <td
          unselectable="on"
          className="row"
          key={nCol}
          onClick={() => {
            this.props.onClick(this.props.nRow, nCol);
          }}
        >
          <button
            className="button"
            style={{
              backgroundImage:
                `url(${this.props.possibleStates[value]})`
            }}
          />
        </td>
      );
    }
    return <tr>{cols}</tr>;
  }
}
export default Row;
