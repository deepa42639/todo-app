import { Navbar } from "./components/Navbar";
import { AddToDo } from "./components/AddToDo";
import { ToDoProvider } from "./context/ToDoContext";
import { ListToDo } from "./components/ListToDo";
import Button from "./Button";


function App() {
  return (
    <div>
        <Navbar />
        <ToDoProvider>
        <div className="container ">
          <AddToDo />
          <ListToDo />
        </div>
    </ToDoProvider>
      </div>
  );
}

export default App;
