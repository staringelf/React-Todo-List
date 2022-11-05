function Todo ({ text, id, completed, deleteTodo }) {
  return (
    <li id={id} data-completed={completed}>
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>X</button>
    </li>
  )
}

export default Todo;
