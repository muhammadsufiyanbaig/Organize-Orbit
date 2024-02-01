import { memo } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
const Todos = ({ todos, removeTodo }) => {
  console.log("child render");
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold font-sans underline mb-4 text-center">Todo App</h2>
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b py-2"
        >
          <p className="flex-1">{todo}</p>
          <button
            className="text-white bg-red-500 hover:bg-red-700 px-2 py-1 rounded"
            onClick={() => removeTodo(index)}
          >
            <RiDeleteBack2Fill />
          </button>
        </div>
      ))}
    </div>
  );
};

export default memo(Todos);