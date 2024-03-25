import React, { useState } from "react";
import TodoTable from "./components/TodoTable";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Xola", rowAssigned: "Mkhatshwa" },

    { rowNumber: 2, rowDescription: "Retla", rowAssigned: "Ndwandwe" },

    { rowNumber: 3, rowDescription: "Lula", rowAssigned: "Nxumalo" },
  ]);

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body"></div>
        <TodoTable todosList={todos} />
      </div>
    </div>
  );
}

export default App;
