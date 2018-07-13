import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumMatBox from './NumMatBox.js';
import Matrix from './Matrix.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {matrixNum: 1, row1: 0, col1: 0, col2: 0, col3: 0, col4: 0};

    this.handleChange = this.handleChange.bind(this);
	this.handleChange0 = this.handleChange0.bind(this);
	this.handleChange1 = this.handleChange1.bind(this);
	this.handleChange2 = this.handleChange2.bind(this);
	this.handleChange3 = this.handleChange3.bind(this);
	this.handleChange4 = this.handleChange3.bind(this);
	
    this.handleSubmit = this.handleSubmit.bind(this);
	
	this.onChangeMatrix = this.onChangeMatrix.bind(this);
	
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

		  
		  <div className = "box0">
	    <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange0}
		text = "Matrix 1 Rows"/>
          </div>  
		  
		  <div className = "box1">
	    <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange1}
		text = "Matrix 1 Columns/Matrix 2 Rows"/>
          </div>  
	  
		{this.state.matrixNum>1 &&

          <div className = "box2">
	    <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange2}
		text = "Matrix 2 Columns/Matrix 3 Rows"/>
          </div>  

        }


		  {this.state.matrixNum>2 &&

		  <div className = "box3">
		<NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange3}
		text = "Matrix 3 Columns/Matrix 4 Rows"/>
		  </div>  

		  }

          {this.state.matrixNum>3 &&

          <div className = "box4">
	    <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange4}
		text = "Matrix 4 Columns"/>
          </div>  

          }
		  


	</div>
	

	<div className = "matrices">
	<div className="matrix">
  <Matrix width={this.state.col1} height={this.state.row1} matNum='1' onChange={this.onChangeMatrix} readonly='false'/>
	</div>
	
	{
		this.state.matrixNum>1 && 	
	<div className="matrix">
	<Matrix width={this.state.col2} height={this.state.col1} matNum='2' onChange={this.onChangeMatrix} readonly='false'/>
	</div>
	}
	
	
	<br /> <br /> <br /> <br /> <br /> <br /><br />
	
	{this.state.matrixNum==1 && 	
	<div className="matrix">
	<Matrix width={this.state.col1} height={this.state.row1} readonly='false'/>
	</div>
	}
	
	{this.state.matrixNum==2 && 	
	<div className="matrix">
	<Matrix width={this.state.col2} height={this.state.row1} readonly='false'/>
	</div>
	}
	
	{this.state.matrixNum==3 && 	
	<div className="matrix">
	<Matrix width={this.state.col3} height={this.state.row1} readonly='false'/>
	</div>
	}
	
	{this.state.matrixNum==4 && 	
	<div className="matrix">
	<Matrix width={this.state.col1} height={this.state.row1} readonly='false'/>
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
  
  onChangeMatrix(i, j) {
	alert(i+" "+j)
  }
  
}

export default App;
