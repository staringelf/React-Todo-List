import { useState } from "react";

function App() {

  const [todo, setTodo] = useState("");
  console.log(todo);
  return (
   <div>
    <label for="todo"> 
      Todo:
      <input type="text" name="todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>
 
    </label>
   </div>
  );
}

export default App;
