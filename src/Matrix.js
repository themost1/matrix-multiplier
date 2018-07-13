import React, { Component } from 'react';
import './App.css';

function Square(props) {
  return (
    <form className="square" onClick={props.onClick}>
      <input id="square" type="number" onChange={props.onChange} width='5px' defaultValue='0'/>
    </form>
  );
}

class Matrix extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {width: props.width, height: props.height, matNum: props.matNum};
	}
	
  renderSquare(i) {
    return (
      <Square
        value={3}
		onChange={() => this.props.onChange(this.props.matNum, i)}
      />
    );
  }
  
  createTable() {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < this.props.height; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < this.props.width; j++) {
        children.push(this.renderSquare(i*this.props.width+j))
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