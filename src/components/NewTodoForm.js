import React, { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [item, setItem] = useState({
    assign: "",
    desc: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setItem((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  const submitTodo = () => {
    if (item.assign !== "" && item.desc !== "") {
      addTodo(item.desc, item.assign);

      setItem({
        assign: "",
        desc: "",
      });
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            name="assign"
            value={item.assign}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            name="desc"
            onChange={handleChange}
            value={item.desc}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
