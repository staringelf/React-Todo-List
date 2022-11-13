import { useEffect, useState, useRef } from "react";
import trashcan from '../icons/trashcan.svg';
import edit from '../icons/edit.svg';

function Todo ({ text, id, completed, deleteTodo, toggleTodo, updateTodo, isEditing, setCurrentlyEditing }) {

  const [newText, setNewText] = useState(text);

  const editingInput = useRef(null);

  useEffect(() => {
    if (!isEditing) return;
    editingInput.current.focus();
  }, [isEditing]);
  
  function handleSubmit(e) {
    e.preventDefault();
    const text = newText.trim();
    if (!text) return;
    updateTodo(text, id);
    setCurrentlyEditing();
  }

  function handleEditInputChange (e) {
    setNewText(e.target.value);
    updateTodo(e.target.value, id);
  }

  function handleEditButtonClick (e) {
    isEditing ? setCurrentlyEditing("") : setCurrentlyEditing(id);
  }

  return (
    <li className="relative flex items-center text-white bg-primary-400 mb-3 p-2" id={id} key={id} data-completed={completed}>
      <label htmlFor={`input-${id}`} className="group cursor-pointer" >
        <input checked={completed} onChange={() => toggleTodo(id)} value={completed} className="appearance-none w-3.5 h-3.5 mr-2 border rounded-full ease-linear duration-400 group-hover:shadow-checkbox group-hover:border-secondary checked:border-secondary checked:bg-secondary" id={`input-${id}` } type="checkbox" />
        <span className={completed ? 'line-through text-light' : ''}>{text}</span>
      </label>
      <form className={!isEditing && 'hidden'} onSubmit={handleSubmit}>
        <input ref={editingInput} className="absolute left-7.5 top-2 bg-primary-400 outline-none border-0 border-b border-white" id={`edit-box-${id}`} type="text" value={newText} onChange={handleEditInputChange}/>
        <button className="hidden" type="submit">Update</button>
      </form>
      
      <button className="ml-auto text-white" onClick={handleEditButtonClick}>
        <img src={edit} alt="edit" />
      </button> 
      <button className="ml-2 text-white" onClick={() => deleteTodo(id)}>
        <img src={trashcan} alt="delete" />    
      </button>
      <button className="hidden" onClick={() => toggleTodo(id)}>Toggle</button>
      
    </li>
  )
}

export default Todo;
