import { useState } from "react"; 

function Todo ({ text, id, completed, deleteTodo, toggleTodo, updateTodo }) {

  const [newText, setNewText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateTodo(newText, id);
    clearForm();
  }

  function clearForm(){
    setNewText("");
  }

  return (
    <li id={id} key={id} data-completed={completed}>
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>X</button>
      <button onClick={() => toggleTodo(id)}>Toggle</button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)}/>
        <button type="submit">Update</button>
      </form>
    </li>
  )
}

export default Todo;
