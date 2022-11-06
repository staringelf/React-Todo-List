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
      <label htmlFor={`input-${id}`} className="group cursor-pointer">
        <input onChange={() => toggleTodo(id)} value={completed} className="appearance-none w-3.5 h-3.5 mr-2 border rounded-full ease-linear duration-400 group-hover:shadow-checkbox group-hover:border-secondary checked:border-secondary checked:bg-secondary" id={`input-${id}` } type="checkbox" />
        <span className={completed ? 'line-through text-light' : ''}>{text}</span>
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
