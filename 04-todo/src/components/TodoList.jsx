import { useState } from "react";

const TodoList = ({
  tasks,
  handleDeleteTask,
  handleCompleted,
  handleEditing,
  handleUpdatedTask,
}) => {
  const [updatedTask, setUpdatedTask] = useState("");

  function sendUpdatedTask(id, updatedTask) {
    if (!updatedTask) return;
    handleUpdatedTask(id, updatedTask);
    setUpdatedTask("");
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="flex justify-between m-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCompleted(task.id)}
          />
          {task.completed ? (
            <h3>
              <del>{task.title}</del> //if task is completed we mark the task as
              deleted
            </h3>
          ) : task.isEditing ? ( //if task is being edited we show input field
            <input
              type="text"
              className="border border-blue-500  px-2"
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
              autoFocus
            />
          ) : (
            <h3>{task.title}</h3> //if task is not completed or is not being edited we show the task
          )}
          {!task.completed && //if task is  completed we don't need to update the task
            (task.isEditing ? (
              <button
                className="bg-blue-500 px-2 py-1 rounded-md font-semibold hover:bg-blue-700 hover:text-white duration-300"
                onClick={() => sendUpdatedTask(task.id, updatedTask)}>
                Update
              </button>
            ) : (
              <button
                className="bg-blue-500 px-2 py-1 rounded-md font-semibold hover:bg-blue-700 hover:text-white duration-300"
                onClick={() => handleEditing(task.id)}>
                Edit
              </button>
            ))}

          <button
            className="bg-red-500 px-2 py-1 rounded-md font-semibold hover:bg-red-700 hover:text-white duration-300"
            onClick={() => handleDeleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
