import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const todoData = [
  {
    id: 1,
    title: "Wake up at 5am",
    completed: false,
    isEditing: false,
  },
  {
    id: 2,
    title: "Exercise up at 5:15am",
    completed: false,
    isEditing: false,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(todoData);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditing = (id) => {
    const editedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(editedTasks);
  };

  const handleUpdatedTask = (id, latestTask) => {
    console.log(id, latestTask);
    const updatedTaskArray = tasks.map((task) =>
      task.id === id
        ? { ...task, title: latestTask, isEditing: !task.isEditing }
        : task
    );
    console.log(updatedTaskArray);
    setTasks(updatedTaskArray);
  };

  return (
    <section className="">
      <div className=" max-w-[500px] mx-auto mt-72">
        <AddTodo handleAddTask={handleAddTask} />
        <TodoList
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleCompleted={handleCompleted}
          handleEditing={handleEditing}
          handleUpdatedTask={handleUpdatedTask}
        />
      </div>
    </section>
  );
};
export default App;
