import React, { useState } from "react";

const Todo_10 = () => {
  const [todo, setTodo] = useState("");
  const [listData, setListData] = useState([]);

  function addTodo() {
    setListData([...listData, todo]);
    console.log(listData);
    setTodo("");
  }

  function removeTodo(index) {
    const updatelist = listData.filter((elem, id) => {
      return index != id;
    });
    setListData(updatelist);
  }

  function removeAll() {
    setListData([]);
  }
  return (
    <>
      <h1>TODO LIST</h1>
      <input
        type="text"
        placeholder="Enter here Your Todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />

      <button onClick={addTodo}>Add</button>

      {listData != [] &&
        listData.map((data, index) => {
          return (
            <>
              <div> {data} </div>
              <p key={index}>
                <button onClick={() => removeTodo(index)}>Remove</button>
              </p>
            </>
          );
        })}

      {listData.length >= 1 && (
        <button onClick={removeAll}>Remove All Todos</button>
      )}
    </>
  );
};

export default Todo_10;
