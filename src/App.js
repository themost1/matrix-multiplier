import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumMatBox from './NumMatBox.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {matrixNum: 1};

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
          <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange}/>
	  
	  {this.state.matrixNum>1 &&

          <div classname = "box1">
          <br />
	    <NumMatBox handleSubmit={this.handleSubmit}/>
          </div>  

          }


          {this.state.matrixNum>2 &&

          <div classname = "box2">
          <br />
	    <NumMatBox handleSubmit={this.handleSubmit}/>
          </div>  

          }

          {this.state.matrixNum>3 &&

          <div classname = "box2">
          <br />
	    <NumMatBox handleSubmit={this.handleSubmit}/>
          </div>  

          }

	</div>



      </div>
    );
  }


  handleChange(event) {
    this.setState({ matrixNum: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
  }
}

export default App;
