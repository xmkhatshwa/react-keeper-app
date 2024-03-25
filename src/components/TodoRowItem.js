import React from "react";

function TodoRowItem({ rowNumber, rowDescription, rowAssigned, deleteTodo }) {
  function handleClick() {
    deleteTodo(rowNumber);
  }
  return (
    <tr onClick={handleClick}>
      <th scope="row">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItem;
