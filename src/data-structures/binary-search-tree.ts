class BinarySearchTree {
    root: TreeNode | null = null;

    insert(value: number) {
    const node = new TreeNode(value);

    if(!this.root) {
        this.root = node;
        return this;
    } else {
        let current = this.root;

        while(true) {
            if(value < current.value) {
                if(!current.left) {
                    current.left = node;
                    return this;
                } else {
                    current = current.left;
                }
            } else {
                if(!current.right) {
                    current.right = node;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }
    }

    find(value: number) {
        let current: TreeNode | null = this.root;
        while(true) {
            if(!current) {
                return null;
            }
            if(value === current.value) {
                return current.value;
            } else if(value < current.value) {
                current = current.left;
            } else {
                current = current.right;
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

export default function binarySearchTree() {
    const bst =  new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(2);
    bst.insert(7);
    bst.insert(12);
    bst.insert(17);
    console.log(bst.find(22));
}

