import React, { Component } from 'react'

export default class classComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleTextChange = (e) => {
    const newText = e.target.value;
    this.setState({
      text: newText
    });
  }

  componentDidMount = () => {
    console.log('componentDidMount')
  }
  
  componentDidUpdate = () => {
    console.log('componentDidUpdate')
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <form>
        <div>
          <input 
            value={this.state.text}
            onChange={this.handleTextChange}
            type="text"
          />
        </div>
        <div>
          <button>Button</button>
        </div>
        <div>
          {this.state.text}
        </div>
        <div>
          {this.props.value}
        </div>
      </form>
    )
  }
}
