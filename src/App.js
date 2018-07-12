import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumMatBox from './NumMatBox.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {matrixNum: 1, row1: 0, col1: 0, col2: 0, col3: 0, col4: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
       
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matrix Multiplier</h1>
        </header>
      
	
	
        <div className='infoZone'>
          <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange}
			text = "Number of Matrices (1-4)"/>

		          <br />

		  
		  <div classname = "box0">
	    <NumMatBox handleSubmit={this.handleSubmit}
		text = "Matrix 1 Columns"/>
          </div>  
		  
		  <div classname = "box1">
	    <NumMatBox handleSubmit={this.handleSubmit}
		text = "Matrix 1 Rows/Matrix 2 Columns"/>
          </div>  
	  
		{this.state.matrixNum>1 &&

          <div classname = "box2">
	    <NumMatBox handleSubmit={this.handleSubmit}
		text = "Matrix 2 Rows/Matrix 3 Columns"/>
          </div>  

        }


		  {this.state.matrixNum>2 &&

		  <div classname = "box3">
		<NumMatBox handleSubmit={this.handleSubmit}
		text = "Matrix 3 Rows/Matrix 4 Columns"/>
		  </div>  

		  }

          {this.state.matrixNum>3 &&

          <div classname = "box4">
	    <NumMatBox handleSubmit={this.handleSubmit}
		text = "Matrix 4 Rows"/>
          </div>  

          }

	</div>



      </div>
    );
  }


  handleChange(event) {
    this.setState({ matrixNum: event.target.value })
  }
  
  handleChange0(event) {
    this.setState({ row1: event.target.value })
  }
  handleChange1(event) {
    this.setState({ col1: event.target.value })
  }
  handleChange2(event) {
    this.setState({ col2: event.target.value })
  }
  handleChange3(event) {
    this.setState({ col3: event.target.value })
  }
  handleChange4(event) {
    this.setState({ col4: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
  }
}

export default App;
