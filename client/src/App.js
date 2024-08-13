import "./App.css";
import { useRef, useState } from "react";
import Item from "./components/item.js";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState([]);


  const inputref = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-todo")
      .then((response) => {
        setTodo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [todo]);

  const addTodo = () => {
    const text = inputref.current.value;
    axios.post("http://localhost:5000/post-todo", { text }).then((response) => {
      console.log(response.data);
      setTodo([...todo, response.data]);
      inputref.current.value = "";
    });
  };

  const deleteTodo = (_id) => {
    axios.delete(`http://localhost:5000/delete/${_id}`).then((response)=>{
              console.log("from the delete :",response.data )
    })

  };


  const updateTodo = (_id) => {
    const newtask = inputref.current.value
  axios.patch(`http://localhost:5000/update/${_id}`, { newtask })
    .then(() => {
      const updatedTodo = [...todo];
      const index = updatedTodo.findIndex(item => item._id === _id);
      if (index !== -1) {
        updatedTodo[index].text = newtask;
        setTodo(updatedTodo);
      }
    })
    .catch((error) => {
      console.error('Error updating todo:', error);
    });
};



  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
      </div>
      <div className="top">
        <input ref={inputref} placeholder="write something ...." />
        <div className="add">
          <button className="btn" onClick={addTodo}>
            Add new task
          </button>
        </div>
        <div className="list">
          {todo.map((element) => {
            return (
              <Item
                key={element._id}
                text={element.text}
                remove={() => {
                  deleteTodo(element._id);
                }}
                update={() => {
                  updateTodo(element._id,element.text);
                }}
              />
            );
          })}
          {/* <Item/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
