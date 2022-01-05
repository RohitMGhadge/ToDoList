import React, { useState } from "react";
import ToDolist from "./ToDolist";

const App = () => {
  const [inputList, setinputList] = useState("");
  const [Item, setItem] = useState([""]);

  const itemEvent = (event) => {
    setinputList(event.target.value)
  }
  const listOfItem = () => {
    setItem((oldItem) => {
      return ([...oldItem, inputList])
    });
    setinputList("");
  };
  const deleteItem = (id) => {
    setItem((oldItem) => {
      return oldItem.filter((arrItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <><div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text"
          placeholder="Add a Items"
          value={inputList}
          onChange={itemEvent} />
        <button onClick={listOfItem}> +</button>
        <ol>
          {Item.map((itemVal, index) => {
            return (<ToDolist
              text={itemVal}
              key={index}
              id={index}
              onSelect={deleteItem}
               />
          )
          })}
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
