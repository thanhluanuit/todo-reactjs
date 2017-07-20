class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: props.todos};
  }

  handleChange(event) {
    const todos = this.props.todos;
    if(event.target.value != 'all') {
      this.setState({todos: todos.filter(todo => todo.status.toString() === event.target.value)});
    }
    else{
      this.setState({todos: todos});
    }
  }

  render(){
    const todos = this.state.todos;
    return(
      <div className='todos-list'>
        <FilterItems onChangeFilter={this.handleChange.bind(this)} />
        {
          todos.map((todo, index) =>
            <Todo todo={todo} key={todo.id} />
          )
        }
      </div>
    )
  }
}
