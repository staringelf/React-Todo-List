import { useState } from "react";
import { nanoid } from 'nanoid'

function Form ({ addTodo }) {

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    addTodo({
      text,
      id: `todo-${nanoid()}`,
      completed: false
    });
    clearForm();
  }

  function clearForm() {
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"> 
        Todo:
        <input type="text" name="todo" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default Form;