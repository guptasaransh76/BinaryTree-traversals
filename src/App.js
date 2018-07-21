import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rootNode: null,
      results: [],
      name: '',
    }
  }


  makeBinaryTree = () => {

    function newNode(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    };

    var currentNode = new newNode(34);

    var rootNode = new newNode();
    rootNode = currentNode;
    // console.log(rootNode);

    currentNode.right = new newNode(92);
    currentNode.left = new newNode(23);
    currentNode = currentNode.left;
    currentNode.left = new newNode(12);
    currentNode.right = new newNode(4);
    currentNode = currentNode.right;
    currentNode.left = new newNode(16);
    currentNode.right = new newNode(9);

    return rootNode;
  }

    // getClass(){
    //   var doc = document.querySelector("selected-node");
    //   console.log(doc);
    // }

  componentWillMount() {
    console.log('component is mounting');
    var rNode = this.makeBinaryTree();
    this.setState({
      ...this.state,
      rootNode: rNode
    }, () => console.log('state', this.state));

    // this.getClass();
  }


  runfun(a){
   var res = document.querySelector('#res');
   res.innerHTML += a;
  }

  preOrderTraversal(root, arr) {
    arr.push(root.val);

    if (root.left) {
      this.preOrderTraversal(root.left, arr);
    }
    if (root.right) {
      this.preOrderTraversal(root.right, arr);
    }
  };

  funpre(val){
    console.log('funpre');
    var array = [];
    this.preOrderTraversal(val, array);
    this.setState({
      ...this.state,
      results: array
    }, () => console.log('results', this.state.results));
  };

  postOrderTraversal(root, arr) {
    if (root.left) {
      this.postOrderTraversal(root.left, arr);
    }
    if (root.right) {
      this.postOrderTraversal(root.right, arr);
    }
    arr.push(root.val);
  }

  funpost(val){
    console.log('funpost');
    var array = [];
    this.postOrderTraversal(val, array);
    this.setState({
      ...this.state,
      results: array
    }, () => console.log('results', this.state.results));
  };




  inOrderTraversal(root, arr) {

    if (root.left) {
      this.inOrderTraversal(root.left, arr);
    }
    arr.push(root.val);
    if (root.right) {
      this.inOrderTraversal(root.right, arr);
    }

  }

  funinOrd(val){
    console.log('funinorder');
    var array = [];
    this.inOrderTraversal(val, array);
    this.setState({
      ...this.state,
      results: array
    }, () => console.log('results', this.state.results));
    this.runfun(array);

  };





  onChangeVal = (e) => {
   this.setState({
    ...this.state,
    name: e.target.id
   }, () => {console.log('state', this.state)});

  }

  handleSubmit = () => {
    let type = this.state.name;
    let rootNode = this.state.rootNode;
    if(type === "pre"){
      this.funpre(rootNode);
    } else  if(type === "post"){
      this.funpost(rootNode);
    } else  if(type === "in"){
      this.funinOrd(rootNode);
    } else {
      console.log('not yet');
    }
  }

 componentDidMount() {
    const element = document.querySelector('#list');

    // var element = elements.forEach((val))
    console.log(element);
    this.setState({
      ...this.state,
      list: [element]
    }, () => {console.log('state', this.state)});
  }

  render() {
    return (
      <div className="App">
        <div className="tree">
          <ul>
            <li id="list">
              <a id="a">34</a>
              <ul>
                <li>
                  <a>23</a>
                  <ul>
                    <li><a>12</a></li>
                    <li>
                      <a>04</a>
                       <ul>
                        <li><a>16</a></li>
                        <li><a>09</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>92</a>
                </li>
              </ul>
            </li>
          </ul>

          </div>


        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Traversals
            <span className="caret"></span>
          </button>
          <ul className ="dropdown-menu" >
            <li><a id="pre" onClick={this.onChangeVal}>Pre Order</a></li>
            <li><a id="post" onClick={this.onChangeVal}>Post Order</a></li>
            <li><a id="in" onClick={this.onChangeVal}>In Order</a></li>
            <li><a id="breadth" onClick={this.onChangeVal}>Breadth Order</a></li>
          </ul>
        </div>

        <button type="button" className="btn btn-default" onClick={this.handleSubmit}> pre </button><br />          

        <div>
          <p id="res" className="res"> {[this.state.result]}</p>
        </div>
      </div>
    );
  }
}

export default App;
