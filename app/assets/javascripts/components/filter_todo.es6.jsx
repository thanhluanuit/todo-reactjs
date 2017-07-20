class FilterItems extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChangeFilter(event);
  }

  render() {
    const status = new Map([
      ['All', 'all'],
      ['Progressing', false],
      ['Finish', true]]
    );
    const options = Array.from(status).map(([key, value]) =>
      <option key={key} value={value}>{key}</option>
    );

    return (
      <div>
        <span>Filter: </span>
        <select onChange={this.handleChange}>{options}</select>
      </div>
    )
  }
}
