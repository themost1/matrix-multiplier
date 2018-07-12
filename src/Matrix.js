import React, { Component } from 'react';
import './App.css';

function Square(props) {
  return (
    <form className="square" onClick={props.onClick}>
      <input id="square" type="number" onChange={props.onChange} width='5px'/>
    </form>
  );
}

class Matrix extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {width: props.width, height: props.height};
	}
	
  renderSquare(i) {
    return (
      <Square
        value={3}
      />
    );
  }
  
  createTable() {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < this.state.height; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < this.state.width; j++) {
        children.push(this.renderSquare(0))
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }
  

  render() {
    return (
      <table>
        {this.createTable()}
      </table>
 
    );
  }
}

export default Matrix;