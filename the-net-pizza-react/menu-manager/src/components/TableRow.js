import React from "react";

const TableRow = ({ menuItem, rowKey, removeMenuItem }) => {

  return (
    <tr>
      <td>{menuItem.name}</td>
      <td>{menuItem.category}</td>
      <td>{menuItem.price}</td>
      <td><button className="btn btn-danger" onClick={() => removeMenuItem(rowKey)}>Delete</button></td>
    </tr>
  );
};

export default TableRow;
