import React, { Component } from 'react';
import './App.css';
import Paragraph from './js/paragraph';
import Tree from './js/tree';
import Next from './js/Next';
import Right from './js/right';
import {makeBinaryTree} from "./js/calls";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rootNode: null,
      results: [],
      name: '',
      onOne: true,
    }
  }

  componentWillMount() {
    console.log('component is mounting');
    var rNode = makeBinaryTree();
    this.setState({
      ...this.state,
      rootNode: rNode
    }, () => console.log('state', this.state));

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
  };


  onChangeVal = (e) => {
    var ib = document.querySelector('#infobox');
    var id = e.target.value;
    if(id === "pre"){
      const string = `<p class="card para"><strong>Algorithm Preorder(tree)<br />
       1. Visit the root.<br />
       2. Traverse the left subtree, i.e., call Preorder(left-subtree)<br />
       3. Traverse the right subtree, i.e., call Preorder(right-subtree) </strong></p>`;
      ib.innerHTML = string;    
    } else if(id === "post"){
        const string = `<p class="card para"><strong>Algorithm Postorder(tree)<br />
         1. Traverse the left subtree, i.e., call Postorder(left-subtree)<br />
         2. Traverse the right subtree, i.e., call Postorder(right-subtree)<br />
         3. Visit the root.</strong></p>`;
      ib.innerHTML = string;
    }else if(id === "in"){
      const string = `<p class="card para"><strong>Algorithm Inorder(tree)<br />
        1. Traverse the left subtree, i.e., call Inorder(left-subtree)<br />
        2. Visit the root.<br />
        3. Traverse the right subtree, i.e., call Inorder(right-subtree)</strong></p>`;

      ib.innerHTML = string;
    } else if(id === "breadth"){
      const string = `<p class="card para"><strong>1. Set up a queue to track which nodes to visit.<br />
        2. Add the root to the queue. <br />3. Until the queue is empty, process the first node in the queue with the following steps:<br />
        (i) remove the node from the front of the queue<br />(ii) add the nodes children to the back of the queue<br />
        (iii) do whatever additional processing you would like!</strong></p>`;
      ib.innerHTML = string;
    }

   this.setState({
    ...this.state,
    name: e.target.value
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

  handleNextApp = () => {
    this.setState({
      ...this.state,
      onOne: false
    });
  }

handleback = () => {
    this.setState({
      ...this.state,
      onOne: true
    });
  }
 componentDidMount() {
    const element = document.querySelector('#list');
    console.log(element);
    this.setState({
      ...this.state,
      list: [element]
    }, () => {console.log('state', this.state)});
  }

  render() {
    return (
      <div className="App">
        <div className="Nav">
            <p className="card-title name"> ClariSight Assignment</p>
          </div>

          {this.state.onOne && 
            <div className="partition">
            <Tree 
            results={this.state.results}
            />
            <Right 
            handleSubmit={this.handleSubmit}
            onChangeVal={this.onChangeVal}
            handleNextApp={this.handleNextApp}
            />
          </div>
          }
          {!this.state.onOne && 
            <Next 
            handleback={this.handleback}
            />

          }

        </div>
    );
  }
}

export default App;
