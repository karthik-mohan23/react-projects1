import { useState } from "react";

const AddTodo = ({ handleAddTask }) => {
  const [taskValue, setTaskValue] = useState("");

  const addTask = () => {
    if (!taskValue) return;
    let task = {
      id: Date.now(),
      title: taskValue,
      completed: false,
      isEditing: false,
    };
    handleAddTask(task);
    setTaskValue("");
  };

  return (
    <div className="flex justify-between gap-4 mb-5">
      <input
        type="text"
        className="border border-blue-500 flex-1 px-2"
        placeholder="Enter the task"
        autoFocus
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
      />
      <button
        className="bg-green-400  hover:bg-green-600 hover:text-white duration-300 px-4 py-1 rounded-sm font-semibold text-lg"
        onClick={addTask}>
        ADD
      </button>
    </div>
  );
};
export default AddTodo;
