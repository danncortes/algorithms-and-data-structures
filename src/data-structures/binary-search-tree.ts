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

    _removeNode(node: TreeNode): TreeNode | null {
        if(!node.left && !node.right) {
            return null;
        }
        if(!node.right) {
            return node.left;
        }
        
        const newRight = node.right;
        let newNode = newRight;
        let preNew = newNode;

        while(newNode.left) {
            preNew = newNode;
            newNode = newNode.left;
        }
        newNode.left = node.left;
        if(newNode.value !== newRight.value) {
            if(newNode.right) {
                preNew!.left = newNode.right;
            }
            newNode.right = newRight
        }
        return newNode;
    }

    remove(value: number) {
        if(!this.root) {
            return null;
        }

        let removedNode;

        if(value === this.root.value) {
            removedNode = this.root;
            this.root = this._removeNode(this.root);
            return removedNode;
        } else {
            let current = this.root;

            while(true) {
                if(value < current.value) {
                    if(!current.left) {
                        return null;
                    }
                    if(value === current.left.value) {
                        removedNode = current.left;
                        current.left = this._removeNode(current.left);
                        return removedNode;
                    } else {
                        current = current.left;
                    }
                } else {
                    if(!current.right) {
                        return null;
                    }
                    if(value === current.right.value) {
                        removedNode = current.right;
                        current.right = this._removeNode(current.right);
                        return removedNode;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    findSecondLargest(): number | undefined {
        if(!this.root) {
            return undefined;
        }

        let secondLargest: TreeNode | undefined = undefined;

        let current = this.root

        while(current.right) {
            secondLargest = current;
            current = current.right;
        }

        return secondLargest?.value;
    }

    _countLeaves(node: TreeNode | null) {
        let leaves = 0;
        if(!node) {
            return leaves
        }

        leaves++;

        if(node.left) {
            leaves += this._countLeaves(node.left);
        }
        if(node.right) {
            leaves += this._countLeaves(node.right);
        }
        return leaves;
    }


    isBalanced() {
        if(!this.root) {
            return true;
        }

        const rightLeaf = this._countLeaves(this.root.right);
        const leftLeaf = this._countLeaves(this.root.left);

        return Math.abs(rightLeaf - leftLeaf) <= 1;
    }

    bfs(): number[] {
        // Breath First Search
        let data: number[] = []
        if(!this.root) {
            return data;
        }
        let current = [this.root];

        while(current.length) {
            const firstNode = current.shift();

            if(firstNode) {
                data.push(firstNode.value);

                if(firstNode.left) {
                    current.push(firstNode.left);
                }
                if(firstNode.right) {
                    current.push(firstNode.right);
                }
            }
        }
        return data;
    }

    _getDFPValues(node: TreeNode | null): number[] {
        let values: number[] = [];

        if(node) {
            values.push(node.value)

            if(node.left) {
                values.push(...this._getDFPValues(node.left));
            }

            if(node.right) {
                values.push(...this._getDFPValues(node.right));
            }
        }
        
        return values;
    }

    dfp() {
        // Depth First Search
        if(!this.root) {
            return [];
        }
        return this._getDFPValues(this.root);
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
    const binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(25)
    // .insert(5)
    // .insert(50)
    // .insert(60)
    // .insert(30)
    // .insert(23)
     .insert(24)
     .insert(23)
     .insert(22)
     .insert(21)
    .insert(70)
    .insert(90);
 
// binarySearchTree.remove(10);
// console.log(binarySearchTree.root!.left!.value) // 12
// console.log(binarySearchTree.root!.left!.left!.value) // 1
// console.log(binarySearchTree.root!.left!.left!.right!.value) // 5
 
// binarySearchTree.remove(50);
// console.log(binarySearchTree.root?.right?.value) // 20
// console.log(binarySearchTree.root?.right?.right?.value) // 60
// console.log(binarySearchTree.root?.right?.right?.left?.value) // 30
console.log('findSecondLargest', binarySearchTree.findSecondLargest()) // 60
console.log('isBalanced', binarySearchTree.isBalanced()) // 60
console.log('isBalanced', binarySearchTree.bfs()) // 60
console.log('isBalanced', binarySearchTree.dfp()) // 60
}

