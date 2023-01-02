import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ menu, removeMenuItem }) => {
  return (
    <tbody>
      {menu.map((element, index) => (
        <TableRow
          key={index}
          rowKey={index}
          menuItem={element}
          removeMenuItem={removeMenuItem}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
