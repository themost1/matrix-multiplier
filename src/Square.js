import React, { Component } from 'react';
import './App.css';

class Square extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {currNum: 0};
		this.onChange = this.onChange.bind(this);
		
		if (this.props.readonly) {
			this.value =  props.value;
		}
		
	}
	
	onChange(event) {
		this.setState( {currNum: event.target.value} );
		this.props.afterValueChanged(this.props.matNum, this.props.squareNum, event.target.value);
	}
	
 render() {
	 if (this.props.readonly) {
		  return (
    <form className="square" onClick={this.props.onClick}>
      <input id="square" type="number" currNum='0' onChange={this.onChange} width='5px' defaultValue='0' value={this.props.value}/>
    </form>
  );
	 }
	 
	 else {
  return (
    <form className="square" onClick={this.props.onClick}>
      <input id="square" type="number" currNum='0' onChange={this.onChange} width='5px' defaultValue='0' readonly={this.props.readonly}/>
    </form>
  );
}
 }
 
 
}

export default Square