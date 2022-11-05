function Todo ({ text, id, deleteTodo }) {
  return (
    <li id={id}>
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>X</button>
    </li>
  )
}

export default Todo;
