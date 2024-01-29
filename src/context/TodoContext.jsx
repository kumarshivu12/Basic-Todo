import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    description: "",
    priority: "",
    status: "incompleted",
  });
  const [open, setOpen] = useState(false);

  const handleOpen = (todo) => {
    if (todo) setTodo(todo);
    setOpen(true);
  };

  const handleClose = () => {
    setTodo({
      id: "",
      title: "",
      description: "",
      priority: "",
      status: "incompleted",
    });
    setOpen(false);
  };

  const addTodo = (newTodo) => {
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const updateTodo = (updatedTodo) => {
    const index = todos.findIndex((prevTodo) => prevTodo.id === updatedTodo.id);
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter((prevTodo) => prevTodo.id !== todo.id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);
  return (
    <TodoContext.Provider
      value={{
        todos,
        todo,
        setTodo,
        open,
        handleOpen,
        handleClose,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

export default TodoProvider;
