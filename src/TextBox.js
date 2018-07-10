import React, { Component } from 'react';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Number of Matrices: <sp />
          <input type="number" min="1" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TextBox;