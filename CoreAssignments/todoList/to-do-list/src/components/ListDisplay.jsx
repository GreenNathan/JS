import React from "react";

const ListDisplay = ({ todoList, changeStatus, deleteListDisplay }) => {
  return (
    <ul>
      {todoList.map((todo, idx) => {
        return (
          <li style={todo.status ?
            { textDecoration: "line-through" } : null} key={idx}>
            <input type="checkbox" checked={todo.status} onChange={(e) =>
              changeStatus(idx)} />

            <p>{todo.content}</p>
            <button onClick={() => deleteListDisplay(idx)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListDisplay;