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
    <form className="text-white flex gap-1 w-full mb-4" onSubmit={handleSubmit}>
      <label htmlFor="todo" className="flex-1" > 
        <span className="hidden">Todo</span>
        <input className="w-full text-inherit px-1 py-2 border-0 border-b border-white bg-transparent outline-0" type="text" name="todo" placeholder="Add New Todo" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <button className="text-inherit" type="submit">Add Todo</button>
    </form>
  )
}

export default Form;