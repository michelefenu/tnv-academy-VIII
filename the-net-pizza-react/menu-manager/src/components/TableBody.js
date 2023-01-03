import React, { Fragment, useState } from "react";
import EditableRow from "./EditableRow";
import TableRow from "./TableRow";

const TableBody = ({ menu, removeMenuItem, editMenuItem }) => {
  const [editableRowId, setEditableRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    category: "",
    price: "",
  });

  const handleEditClick = (event, rowKey, menuItem) => {
    event.preventDefault();
    setEditableRowId(rowKey);
    setEditFormData(menuItem);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = () => {
    editMenuItem(editableRowId, editFormData);
    setEditableRowId(null);
  }

  return (
    <tbody>
      {menu.map((element, index) => (
        <Fragment key={index}>
          {index === editableRowId ? (
            <EditableRow
              key={index}
              editFormData={editFormData}
              handleEditFormChange={handleEditFormChange}
              handleEditFormSubmit={handleEditFormSubmit}
              rowKey={index}
            />
          ) : (
            <TableRow
              key={index}
              rowKey={index}
              menuItem={element}
              removeMenuItem={removeMenuItem}
              handleEditClick={handleEditClick}
            />
          )}
        </Fragment>
      ))}
    </tbody>
  );
};

export default TableBody;
