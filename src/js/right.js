import React from "react";
import '../App.css';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';


export default class Right extends React.Component {

  render() {
    return (
      <div className="right">
        <div className="select">

	      <FormGroup controlId="formControlsSelect">
		      <ControlLabel>Select traversal</ControlLabel>
		      <FormControl componentClass="select" placeholder="select traversal">
		        <option value="select">select</option>
		        <option value="pre" onClick={this.props.onChangeVal}>Pre Order</option>
		        <option value="post" onClick={this.props.onChangeVal}>Post Order</option>
		        <option value="in" onClick={this.props.onChangeVal}>Inorder</option>
		        <option value="breadth" onClick={this.props.onChangeVal}>Breadth First Traversal</option>
		      </FormControl>
			</FormGroup>

        </div>
        <div>
        <div id="infobox" className="infobox">

        </div>
        </div>

        <div className="button-gr">
	        <br /><button type="button" className="btn btn-default" onClick={this.props.handleSubmit}> Submit </button>          

	        <button type="button" className="btn btn-default" onClick={this.props.handleNextApp}> Next Application </button><br />          
        </div>
      </div>
    );
  }
}