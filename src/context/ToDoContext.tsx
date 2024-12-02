import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ToDoProviderProps = {
  children: ReactNode;
};
type ToDo = {
  id: number;
  title: string;
  desc: string;
  isCompleted: boolean;
};

type ToDoContext = {
  todos: ToDo[];
  addToDo: (todo: ToDo) => void;
  delToDo: (id: number) => void;
  editToDo: (updatedTodo: ToDo) => void;
  markAsDone: (id: number) => void;
};

const ToDoContext = createContext({} as ToDoContext);

export function useToDo() {
  const context = useContext(ToDoContext);
  if (context === undefined)
    throw new Error("useSomething must be used within a SomethingProvider");

  return context;
}

export function ToDoProvider({ children }: ToDoProviderProps) {
  const [todos, setTodos] = useState<ToDo[]>(() => {
    const savedToDos = localStorage.getItem("todos");
    return savedToDos ? JSON.parse(savedToDos) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (todo: ToDo) => {
    setTodos([...todos, todo]);
  };

  const delToDo = (id: number) => {
    setTodos((items) => {
      return items.filter((item) => item.id !== id);
    });
  };

  const editToDo = (updatedTodo: ToDo) => {
    const edited = todos.map((todo) =>
      todo.id == updatedTodo.id ? updatedTodo : todo
    );
    setTodos(edited);
  };

  const markAsDone = (id: number) => {
    const marked = todos.map((todo) => {
      return todo.id == id ? { ...todo, isCompleted: true } : todo;
    });
    setTodos(marked);
  };

  return (
    <ToDoContext.Provider
      value={{
        todos,
        addToDo,
        delToDo,
        markAsDone,
        editToDo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
