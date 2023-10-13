import AddTodo from "./components/AddTodo";
import ListDisplay from "./components/ListDisplay";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { content: "create todo list", status: false },
    { content: "checked the check", status: true },
  ]);

  const addTodoItem = (todo) => {
    let todoItem = {
      content: todo,
      status: false,
    };
    setTodoList([...todoList, todoItem]);
  };
  const changeTodoStatus = (updateIdx) => {
    console.log("update", updateIdx);
    //copy state

    const todoListCopy = [...todoList];
    todoListCopy[updateIdx].status = !todoListCopy[updateIdx].status;
    setTodoList(todoListCopy);
  };

  //delete
  const deleteListDisplay = (deleteIdx) => {
    console.log("delete", deleteIdx);
    const filteredList = todoList.filter(
      (el, i) => {
        return i !== deleteIdx;
      });
    setTodoList(filteredList);
  };

  return (
    <div className="App">
      <AddTodo addTodoItem={addTodoItem}
        changeStatus={changeTodoStatus} />
      <ListDisplay changeStatus={changeTodoStatus}
        todoList={todoList} deleteListDisplay={deleteListDisplay} />
    </div>
  );
}

export default App;