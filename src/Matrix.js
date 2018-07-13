import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';


class Matrix extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {width: props.width, height: props.height, matNum: props.matNum, layout: props.layout};
	}
	
  renderSquare(i) {
    return (
      <Square
  squareNum = {i}
  matNum = {this.state.matNum}
  afterValueChanged = {this.props.onChange}
  readonly = {false}
		
      />
    );
  }
  
  renderSquareFixed(i, j) {
     return (
      <Square
  squareNum = {i}
  matNum = {this.state.matNum}
  afterValueChanged = {() => this.props.onChange}
  readonly = {true}
  value = {j}
		
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
		  if (!this.props.layout)
				children.push(this.renderSquare(i*this.props.width+j))
		  else {
			 children.push(this.renderSquareFixed(i*this.props.width+j, this.props.layout[i*this.props.width+j]))
			
		  }
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