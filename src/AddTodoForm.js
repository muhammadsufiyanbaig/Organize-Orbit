import { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        className="border border-gray-300 px-4 py-2 w-full rounded-l"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="bg-blue-500 text-xl font-bold text-white px-3 py-2 rounded-md hover:bg-blue-700"
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default AddTodoForm;