import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange, handleEditFormSubmit }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          size="15"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="category"
          size="10"
          value={editFormData.category}
          onChange={handleEditFormChange}

        ></input>
      </td>
      <td>
        <input
          type="number"
          name="price"
          size="4"
          value={editFormData.price}
          onChange={handleEditFormChange}

        ></input>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => handleEditFormSubmit()}>Save</button>
      </td>
    </tr>
  );
};

export default EditableRow;
