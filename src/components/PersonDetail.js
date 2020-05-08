import React from "react";

function PersonSearch(props) {
  return (
    <tr>
      <td>
        <img
          alt={props.firstname}
          className="img-fluid"
          src={props.src}
          style={{ margin: "0 auto" }}
        />
      </td>
      <td>{props.firstname}</td>
      <td>{props.lastname}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default PersonSearch;
