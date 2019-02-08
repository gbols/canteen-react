import React from "react";
import { dateParser, calTotal } from "../helpers/helpers";

export class History extends React.Component {
  render() {
    return (
      <li className="table-row">
        <div className="col history col-1">{this.props.index + 1}</div>
        <div className="col history col-1">{this.props.order.orderid}</div>
        <div className="history col col-1">
          {dateParser(Number(this.props.order.orderat))}
        </div>
        <div className="num history col col-2">
          {calTotal(this.props.order.info)}
        </div>
        <div className={`${this.props.order.status} status col col-2`}>
          {this.props.order.status}
        </div>
      </li>
    );
  }
}
export default History;
