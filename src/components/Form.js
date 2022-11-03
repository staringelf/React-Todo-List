import { useState } from "react";

function Form ({ addTodo }) {

  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(todo);
    clearForm();
  }

  function clearForm() {
    setTodo("");
  }

  return (
    <form>
      <label htmlFor="todo"> 
        Todo:
        <input type="text" name="todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      </label>
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}

export default Form;