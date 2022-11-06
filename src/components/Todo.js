import { useState } from "react"; 

function Todo ({ text, id, completed, deleteTodo, toggleTodo, updateTodo }) {

  const [newText, setNewText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newText) return;
    updateTodo(newText, id);
    clearForm();
  }

  function clearForm(){
    setNewText("");
  }

  return (
    <li className="flex items-center text-white bg-primary-400 mb-3 p-2" id={id} key={id} data-completed={completed}>
      <label htmlFor={`input-${id}`}>
        <input className="appearance-none w-3.5 h-3.5 mr-2 border rounded-full" id={`input-${id}` } type="checkbox" />
        <span>{text}</span>
      </label>
      <button className="ml-auto" onClick={() => deleteTodo(id)}>x</button>
      <button className="hidden" onClick={() => toggleTodo(id)}>Toggle</button>
      <form className="hidden" onSubmit={handleSubmit}>
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)}/>
        <button type="submit">Update</button>
      </form>
    </li>
  )
}

export default Todo;
