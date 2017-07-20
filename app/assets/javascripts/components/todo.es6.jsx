class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {status: props.todo.status};
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }

  handleChangeStatus(event) {
    this.setState({status: event.target.checked});
    this.updateStatusToServer(event);
  }

  updateStatusToServer(event) {
    const id = event.target.value;
    $.ajax({
      type: 'PUT',
      url: `/todos/${id}`,
      data: {
        todo: {status: event.target.checked}
      }
    })
  }

  render() {
    const todo = this.props.todo;
    return(
      <div className='todo'>
        <input type='checkbox' defaultValue={todo.id} checked={this.state.status} onChange={this.handleChangeStatus} />
        <span>{todo.content}</span>
      </div>
    )
  }
}
