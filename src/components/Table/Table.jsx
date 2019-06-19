import React, { Component } from "react";
import Row from "../Row/Row";

class Table extends Component {
  state = {};

  componentDidMount() {}

  render() {
    let rows = [];
    if (this.props.rows && this.props.rows) {
      for (let i = 0; i < this.props.rows; i++) {
        rows.push(
          <Row
            table={this.props.table}
            key={i}
            onClick={this.props.onClick}
            nRow={i}
            rows={this.props.rows}
            cols={this.props.cols}
            possibleStates={this.props.possibleStates}
          />
        );
      }
    }

    return (
      <div>
        {this.props.cols > 0 && this.props.rows > 0 ? (
          <table style={{ borderCollapse: 'collapse' }}>
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
