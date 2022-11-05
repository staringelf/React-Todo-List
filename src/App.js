import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {

  const [todos, setTodos] = useState([]);
  const [completedAll, setCompletedAll] = useState(false);

  function addTodo(todo) {
    setTodos([
      ...todos, 
      todo
    ]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function deleteAll(){
    setTodos([]);
  }

  function toggleTodo(id){
    setTodos(todos.map((todo) => (
      todo.id === id ? {
        ...todo,
        completed: !todo.completed
      } : todo
    )))
  }

  function toggleAll(){
    setTodos(todos.map((todo) => (
      {
        ...todo,
        completed: !todo.completed
      }      
    )
    ));
  }

  function completeAll() {
    setTodos(todos.map((todo) => (
      { 
        ...todo,
        completed: !completedAll
      }
    )));
    setCompletedAll(!completedAll);
  }

  return (
    <div>
      <Form 
        addTodo={addTodo} 
      />
      <ul className="todos">
        {todos.map(({ text, id, completed }) => (
          <Todo 
            text={text} 
            id={id} 
            completed={completed}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}/>
        ))}
      </ul>

      <button onClick={deleteAll}>Delete All</button>
      <button onClick={toggleAll}>Toggle All</button>
      <button onClick={completeAll}>Complete All</button>
   </div>
  );
}

export default App;
