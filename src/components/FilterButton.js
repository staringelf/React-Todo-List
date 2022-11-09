function FilterButton ({ name, isPressed, setFilter }) {
  return (
    <button className="px-3 py-1"
            onClick={() => setFilter(name)} 
            aria-pressed={isPressed}>
      <span className="sr-only">Show</span>
      <span>{name}</span>
      <span className="sr-only">Tasks</span>
    </button>
  )
}

export default FilterButton;