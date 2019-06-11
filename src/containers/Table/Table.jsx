import React, { Component } from "react";
import Row from "../Row/Row";

class Table extends Component {
  state = {};

  componentDidMount() {
    console.log("props:", this.props);
  }

  render() {
    let rows = [];
    if (this.props.rows && this.props.rows) {
      for (let i = 0; i < this.props.rows; i++) {
        rows.push(
          <Row
            key={i}
            onClick={this.props.onClick}
            nRow={i}
            cols={this.props.cols}
          >
            asd
          </Row>
        );
      }
    }

    return (
      <div>
        {this.props.cols > 0 && this.props.rows > 0 ? (
          <table style={{ border: "solid 1px black" }}>
            <tbody>{rows}</tbody>
          </table>
        ) : (
          <div>Ingrese filas y columnas</div>
        )}
      </div>
    );
  }
}
export default Table;
