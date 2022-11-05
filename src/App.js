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

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <Form 
        addTodo={addTodo} 
      />
      <ul className="todos">
        {todos.map(({ text, id }) => (
          <Todo 
            text={text} 
            id={id} 
            deleteTodo={deleteTodo}/>
        ))}
      </ul>

   </div>
  );
}

export default App;
