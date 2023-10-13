import { useState } from "react";

const AddTodo = (props) => {
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoItem(todoItem);
    setTodoItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)} />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;