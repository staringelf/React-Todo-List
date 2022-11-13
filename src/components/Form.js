import { useState } from "react";
import { nanoid } from 'nanoid';
import plus from '../icons/plus.svg';

function Form ({ addTodo }) {

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const todoText = text.trim();
    if (!todoText) return;
    addTodo({
      text: todoText,
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
      <label htmlFor="todo" className="flex-1 mr-1" > 
        <span className="hidden">Todo</span>
        <input className="w-full text-inherit px-1 py-2 border-0 border-b border-white bg-transparent outline-0" type="text" name="todo" placeholder="Add New Todo" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <button className="text-inherit bg-secondary w-9 h-9 flex justify-center items-center rounded-full shadow-button" type="submit">
        <img src={plus} alt="plus" />
        <span className="sr-only">Add Todo</span>
      </button>
    </form>
  )
}

export default Form;