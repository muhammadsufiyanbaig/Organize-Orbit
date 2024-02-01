import { useState } from "react";
import Todos from "./Todos.js";
import AddTodoForm from "./AddTodoForm";
import { MdDelete } from "react-icons/md";

const App = () => {
  const [todos, setTodos] = useState([]);

  const clear = () => {
    setTodos([]);
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto mt-8 p-4 max-w-md">
      <Todos todos={todos} removeTodo={removeTodo} />
      <button
        className="bg-red-500 text-xl text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={clear}
      >
        <MdDelete />
      </button>
      <hr className="my-4" />
      <div>
        <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;