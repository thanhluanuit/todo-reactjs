class Todos extends React.Component {
  render(){
    const todos = this.props.todos;

    return(
      <ul >
        {
          todos.map((todo, index) =>
            <Todo content={todo.content} key={index} />
          )
        }
      </ul>
    )
  }
}
