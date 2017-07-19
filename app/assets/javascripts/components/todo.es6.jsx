class Todo extends React.Component {
  render() {
    const todo = this.props.todo;

    return(
      <div className='todo'>
        <input type='checkbox' checked={todo.status}/>
        <span>{todo.content}</span>
      </div>
    )
  }
}
