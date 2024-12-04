import React, { Component } from 'react'

export default class classComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      disabledButton: false
    };
    this.myInputRef = React.createRef();
  }

  textIsReact = (newText) => {
    this.setState({
      disabledButton: newText.toLowerCase() === 'реакт' 
    })
  }

  handleTextChange = (e) => {
    const newText = e.target.value;
    this.setState({
      text: newText
    });
    this.textIsReact(newText)
  }

  handleClickFocusButton = (e) => {
    e.preventDefault()
    this.myInputRef.current.focus()
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
            ref={this.myInputRef}
            type="text"
          />
        </div>
        <div>
          <button
            type='submit'
            disabled={this.state.disabledButton}
          >
            Submit Button
          </button>
        </div>
        <div>
          <button onClick={this.handleClickFocusButton}>Focus Button</button>
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
