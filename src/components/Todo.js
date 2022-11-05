function Todo ({ text, id, completed, deleteTodo, toggleTodo }) {
  return (
    <li id={id} key={id} data-completed={completed}>
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>X</button>
      <button onClick={() => toggleTodo(id)}>Toggle</button>
    </li>
  )
}

export default Todo;
