class BinarySearchTree {
  root: TreeNode | null = null;

  insert(value: number) {
    const node = new TreeNode(value);

    if(!this.root) {
        this.root = node;
    } else {
        let current = this.root;

        while(true) {
            if(value < current.value) {
                if(!current.left) {
                    current.left = node;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if(!current.right) {
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
    }
  }
}

class TreeNode {
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(public value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

