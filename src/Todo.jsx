function Todo() {
  return (
    <div className="Todo">
      <h2 className="todo">Todo</h2>
      <div className="text-box"></div>
      <div className="add"> Add a new todo</div>
      <div className="input">
        <input
          className="input-field"
          type="text"
          name="text"
          placeholder="Enter task and press enter"
        />
      </div>
    </div>
  );
}

export default Todo;