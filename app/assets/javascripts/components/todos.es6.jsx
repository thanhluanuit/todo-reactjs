class Todos extends React.Component {
  render(){
    const todos = this.props.todos;

    return(
      <div className='todos-list'>
        {
          todos.map((todo, index) =>
            <Todo todo={todo} key={index} />
          )
        }
      </div>
    )
  }
}
