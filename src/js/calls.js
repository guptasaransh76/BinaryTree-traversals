

const makeBinaryTree = () => {

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

export {makeBinaryTree};
