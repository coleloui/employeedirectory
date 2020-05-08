import React from "react";

function Table(props) {
  return (
    <table className="table table-dark table-hover border border-danger">
      <thead>
        <tr>
          <th>Picture</th>
          <th>First <button onClick={props.sort}>Sort</button></th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default Table;
