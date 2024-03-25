import React from "react";

function TodoRowItem({ rowNumber, rowDescription, rowAssigned }) {
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{rowDescription} Xola</td>
      <td>{rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItem;
