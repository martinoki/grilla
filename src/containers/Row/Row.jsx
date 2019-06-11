import React, { Component } from "react";

class Row extends Component {

  componentDidMount() {
    
  }

  render() {
    let cols = [];
    for (let i = 0; i < this.props.cols; i++) {
      cols.push(
        <td
          style={{
            border: "solid 1px black",
            width: "50px",
            height: "50px",
            textAlign: "center",
            cursor: "pointer"
          }}
          key={i}
          onClick={() => {
            this.props.onClick(this.props.nRow, i);
          }}
        >
          {this.props.nRow};{i}
        </td>
      );
    }
    return <tr>{cols}</tr>;
  }
}
export default Row;
