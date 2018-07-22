import React from "react";
import '../css/next.css';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class Next extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    	total: '',
    	elements: '',
    	lenerror: 'Please fill the size of the array.',
    	arrerror: 'Please fill the elements of the array.',
      rootAdd: null,
      arr: []
    }
  }

	makeLinkedList = () => {
		console.log('makeLinkedList');
		let results = "";

		function newNode(val) {
	      this.val = val;
	      this.next = null;
	    };

	    const {total, elements} = this.state;

	    let arr = elements.split(" ")
	    let len = arr.length;
	    this.setState({
	    	...this.state,
	    	arr: arr
	    });
	    let currentNode = null;
	    let root = null;
	   	var nodes = [];

	    for(let i = 0; i < len; i++){
	    	let list = new newNode(arr[i]);

	    	nodes.push(list);
	    	console.log('rootnode', nodes);
	    }
	    root = nodes[0];

	    for(let i = 0; i < len; i++){
	    	currentNode = nodes[i];
	    	let position = currentNode.val - 1;
	    	currentNode.next = nodes[position];

	    }


	    for(let i=0; i < len; i++){
	        if(arr[Math.abs(arr[i])] >= 0){
	        	arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
	        }
	        else{
	        	console.log(Math.abs(arr[i]), " ");
	        	results += Math.abs(arr[i]);
	        }
	    }
	    this.setState({
	    	...this.state,
	    	results: results
	    }, () => {console.log('state', this.state)});

	    return root;

	}

	onChangeVal(key, value) {
	    let state = {
	      ...this.state
	    };
	    state[key] = value.target.value;

	    this.setState(state);
	  }


  handleClick = () => {
  	let length = document.querySelector('#total');
  	let elements = document.querySelector('#elements');
  	let length_error = document.querySelector('#lenerror');
  	let array_error = document.querySelector('#arrerror');
  	let display = document.querySelector('#display');

    if (length.value === "" || elements.value === "") {
        length_error.innerHTML = this.state.lenerror;
        array_error.innerHTML = this.state.arrerror;

    } 
    else {
    	display.innerHTML = "CHECKING FOR DUPLICATE";
    	let rootadd = this.makeLinkedList();
    	this.setState({
    	...this.state,
    	rootAdd: rootadd
    	}, () => {console.log('state TRyy', this.state)});

    }
  	
  }

  handleback = () => {
  	this.setState({
  		...this.state,
  		onOne: true
  	});
  }

  handlereset = () => {
  	document.getElementById("form-st").reset();
  	document.getElementById("lenerror").innerHTML="";
  	document.getElementById("arrerror").innerHTML="";

  	this.setState({
  		...this.state,
  		total: '',
    	elements: '',
        rootAdd: null,
        arr: [],
        results: ''
  	});

  }


  render() {

    return (
	    <div className="dupapp">

		    <form className="form-st" id="form-st">
			    <FieldGroup
			      id="total"
			      type="text"
			      label="Array Length"
			      placeholder="Enter integer"
			      onChange={(val) => {
	                  this.onChangeVal("total", val)
	                }}
			    />
			    <p id="lenerror" className="error" > </p>
			    <FieldGroup
			      id="elements"
			      type="text"
			      label="Elements"
			      placeholder="Enter space separated array"
			      onChange={(val) => {
	                  this.onChangeVal("elements", val)
	                }}
			    />
			    <p id="arrerror" className="error" > </p>

			    <div className="bgroup">
					<button type="button" className="btn btn-default back" onClick={this.props.handleback}> Back</button>        
			        <button type="button" className="btn btn-default" onClick={this.handleClick}> Submit</button>
			        <button type="button" className="btn btn-default" onClick={this.handlereset}> Refresh</button><br /> 
			    </div>
          
	        </form>

	        <div>
	        	<div className="card results">
				  <div className="card-body">
				    <h3 id="display" className="card-title" />
				    <p className="card-text">{[this.state.results]}</p>
				  </div>
				</div>
	        </div>

	  	</div>
    );
  }
}