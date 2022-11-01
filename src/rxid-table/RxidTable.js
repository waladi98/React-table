import React, { Component, Fragment } from "react";
import "./RxidTable.css";
class RxidTable extends Component {
  constructor(props) {
    super(props);
  }
  handleChangeShowMaxRow(event) {
    console.log(event);
  }
  state = {};
  render() {
    return (
      <div className="rxid-table">
        <div className="rxid-table-header">
          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">
              <em className="fas fa-search"></em>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search.."
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div className="rxid-table-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <div className="th-content">
                      <span className="th-text">No</span>
                    </div>
                  </th>
                  {this.props.model.columns.map((column, index) => {
                    return (
                      <th className="sortable" key={index}>
                        <div className="th-content">
                          <span className="th-text ">{column.header}</span>
                          <span className="sort">
                            <em className="fas fa-sort"></em>
                          </span>
                        </div>
                      </th>
                    );
                  })}

                  {this.props.actions && (
                    <th className="text-center">Action</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {this.props.model.records.map((record, indexI) => {
                  return (
                    <tr key={indexI}>
                      <td>{indexI + 1}</td>
                      {this.props.model.columns.map((column, indexJ) => {
                        return (
                          <td key={indexI + "" + indexJ}>
                            {record[column.field]}
                          </td>
                        );
                      })}
                      {this.props.actions && (
                        <td className="text-center">
                          {this.props.actions(record)}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rxid-table-footer">
          <div className="select-max-row">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              value={10}
              onChange={(event) => this.handleChangeShowMaxRow(event)}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default RxidTable;
