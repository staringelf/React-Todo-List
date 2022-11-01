import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  console.log(todos);
  function addTodo(e) {
    e.preventDefault();
    setTodos ([...todos, todo]);
  }

  return (
    <div>
      <form>
        <label for="todo"> 
          Todo:
          <input type="text" name="todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        </label>
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>
   </div>
  );
}

export default App;
