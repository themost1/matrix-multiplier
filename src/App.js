import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumMatBox from './NumMatBox.js';
import Matrix from './Matrix.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {matrixNum: 1, row1: 0, col1: 0, col2: 0, col3: 0, col4: 0, solution: Array(9).fill('0')};

    this.handleChange = this.handleChange.bind(this);
	this.handleChange0 = this.handleChange0.bind(this);
	this.handleChange1 = this.handleChange1.bind(this);
	this.handleChange2 = this.handleChange2.bind(this);
	this.handleChange3 = this.handleChange3.bind(this);
	this.handleChange4 = this.handleChange3.bind(this);
	
    this.handleSubmit = this.handleSubmit.bind(this);
	
	this.onChangeMatrix = this.onChangeMatrix.bind(this);
	
	this.matrix1 = Array(9).fill('0');
	this.matrix2 = Array(9).fill('0');
	this.matrix3 = Array(9).fill('0');
	
  }
       
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matrix Multiplier</h1>
        </header>
      

	
        <div className='infoZone'>
          <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange}
			text = "Number of Matrices (2 or 3)" min="2" max="3"/>

		          <br />

		  
		  <div className = "box0">
	    <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange0}
		text = "Matrix 1 Rows (up to 10)" min="1" max="10"/>
          </div>  
		  
		  <div className = "box1">
	    <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange1}
		text = "Matrix 1 Columns/Matrix 2 Rows" min="1" max="10"/>
          </div>  
	  
		{this.state.matrixNum>0 &&

          <div className = "box2">
	    <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange2}
		text = "Matrix 2 Columns/Matrix 3 Rows" min="1" max="10"/>
          </div>  

        }


		  {this.state.matrixNum>2 &&

		  <div className = "box3">
		<NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange3}
		text = "Matrix 3 Columns" min="1" max="10"/>
		  </div>  

		  }

          {this.state.matrixNum>3 &&

          <div className = "box4">
	    <NumMatBox onSubmit={this.handleSubmit} onChange={this.handleChange4}
		text = "Matrix 4 Columns"  min="1" max="10"/>
          </div>  

          }
		  


	</div>
	
	<br /> <br /> <br />

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

	{this.state.matrixNum>2 && 	
	<div className="matrix">
	<Matrix width={this.state.col3} height={this.state.col2} matNum='3' onChange={this.onChangeMatrix} readonly='false'/>
	</div>
	}

	

	
	</div>

		<br /> <br />
	
	<div className = "matrices">
	
	{this.state.matrixNum==2 && 	
	<div className="matrix">
	<Matrix width={this.state.col2} height={this.state.row1} layout={this.state.solution} readonly='false'/>
	</div>
	}
	
	{this.state.matrixNum==3 && 	
	<div className="matrix">
	<Matrix width={this.state.col3} height={this.state.row1} layout={this.state.solution} readonly='false'/>
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

	var old = this.matrix1;
	this.matrix1 = Array(this.state.col1*event.target.value).fill('0');
	for (let a = 0; a<old.length && a<this.matrix1.length; a++) {
		this.matrix1[a] = old[a];
	}
	
	this.setState({solution: Array(event.target.value*this.state.col2).fill('0')});

	this.calcSolution();
	
  }
  handleChange1(event) {
    this.setState({ col1: event.target.value });

	var old = this.matrix1;
	var old2 = this.matrix2;
	
    
	this.matrix1 = Array(event.target.value*this.state.row1).fill('0');
	this.matrix2 = Array(event.target.value*this.state.col2).fill('0');

	for (let a = 0; a<old.length && a<this.matrix1.length; a++) {
		this.matrix1[a] = old[a];
	}

	for (let a = 0; a<old.length && a<this.matrix2.length; a++) {
		this.matrix2[a] = old2[a];
	}

    
	this.setState({solution: Array(this.state.row1*this.state.col2).fill('0')});

	this.calcSolution();
  }
  handleChange2(event) {
    this.setState({ col2: event.target.value });

	var old = this.matrix2;
	var old2 = this.matrix3;

	this.matrix2 = Array(event.target.value*this.state.col1).fill('0');	
	this.matrix3 = Array(event.target.value*this.state.col3).fill('0');

	for (let a = 0; a<old.length && a<this.matrix2.length; a++) {
		this.matrix2[a] = old[a];
	}

	for (let a = 0; a<old.length && a<this.matrix3.length; a++) {
		this.matrix3[a] = old2[a];
	}
    
	this.setState({solution: Array(this.state.row1*event.target.value).fill('0')});
	this.calcSolution();
  }
  handleChange3(event) {
    this.setState({ col3: event.target.value });
	this.matrix3 = Array(event.target.value*this.state.col2).fill('0');

	var old = this.matrix3;
	for (let a = 0; a<old.length && a<this.matrix3.length; a++) {
		this.matrix3[a] = old[a];
	}

    this.calcSolution();
    	    
  }
  handleChange4(event) {
    this.setState({ col4: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  
  onChangeMatrix(i, j, val) {
	if (i==1) {
		this.matrix1[j] = val;
	}
	else if (i==2) {
		this.matrix2[j] = val;
	}
	else if (i==3) {
		this.matrix3[j] = val;
	}

	
	this.calcSolution();

  }

  calcSolution() {
	  var temp;
	var preTemp;
	if (this.state.matrixNum==2) {
		temp = Array(this.state.row1*this.state.col2).fill('0');
		for (let a = 0; a<this.state.row1; a++) {
			for (let b = 0; b<this.state.col2; b++) {
			
				var val = 0;
				for (let c = 0; c<this.state.col1; c++) {
					var part1 = this.matrix1[a*this.state.col1+c];
					var part2 = this.matrix2[c*this.state.col2+b];
					val += part1*part2;
				}
				
				temp[a*this.state.col2+b] = val;
			
			}
		}

	}

	else if (this.state.matrixNum==3) {
		preTemp = Array(this.state.row1*this.state.col2).fill('0');
		temp =  Array(this.state.row1*this.state.col3).fill('0');
		for (let a = 0; a<this.state.row1; a++) {
			for (let b = 0; b<this.state.col2; b++) {
			
				var val = 0;
				for (let c = 0; c<this.state.col1; c++) {
					var part1 = this.matrix1[a*this.state.col1+c];
					var part2 = this.matrix2[c*this.state.col2+b];
					val += part1*part2;
				}
				
				preTemp[a*this.state.col2+b] = val;
			
			}
		}

		for (let a = 0; a<this.state.row1; a++) {
			for (let b = 0; b<this.state.col3; b++) {
				var val = 0;
				for (let c = 0; c<this.state.col2; c++) {
					var part1 = preTemp[a*this.state.col2+c];
					var part2 = this.matrix3[c*this.state.col3+b];
					val += part1*part2;
				}
				
				temp[a*this.state.col3+b] = val;
			
			}
		}
		

	}
	
	this.setState( {solution: temp});
  }
  
}

export default App;
