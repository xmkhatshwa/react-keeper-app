import React, { useState } from "react";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Xola", rowAssigned: "Mkhatshwa" },

    { rowNumber: 2, rowDescription: "Retla", rowAssigned: "Ndwandwe" },

    { rowNumber: 3, rowDescription: "Lula", rowAssigned: "Nxumalo" },
  ]);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body"></div>
        <TodoTable todosList={todos} deleteTodo={deleteTodo} />

        <NewTodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
