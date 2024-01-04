import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const todoData = [
  {
    id: 1,
    title: "Wake up at 5am",
  },
  {
    id: 2,
    title: "Exercise up at 5:15am",
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

  return (
    <section className="">
      <div className=" max-w-96 mx-auto mt-72">
        <AddTodo handleAddTask={handleAddTask} />
        <TodoList tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </div>
    </section>
  );
};
export default App;
