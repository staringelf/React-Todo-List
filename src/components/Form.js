import { useState } from "react";
import { nanoid } from 'nanoid'

function Form ({ addTodo }) {

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo({
      text,
      id: `todo-${nanoid()}`
    });
    clearForm();
  }

  function clearForm() {
    setText("");
  }

  return (
    <form>
      <label htmlFor="todo"> 
        Todo:
        <input type="text" name="todo" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}

export default Form;