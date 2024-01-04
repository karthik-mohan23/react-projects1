const TodoList = ({ tasks, handleDeleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="flex justify-between m-3">
          <h3>{task.title}</h3>
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
