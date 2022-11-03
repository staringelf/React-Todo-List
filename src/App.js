import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([
      ...todos, 
      todo
    ])
  }

  return (
    <div>
      <Form 
        addTodo={addTodo} 
      />
      <ul className="todos">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>

   </div>
  );
}

export default App;
