class StackNode {
    value: any;
    next: StackNode | null = null;
    constructor(value: any) {
        this.value = value;
    }
}

class Stack {
    first: StackNode | null = null;
    last: StackNode | null = null;
    length: number = 0;

    push(value: any) {
        const node = new StackNode(value);
        
        if(!this.length) {
            this.last = node;
        } else {
            node.next = this.first;
        }

        this.first = node;
        this.length += 1;
        
        return this.length;
    }

    pop() {
        if(!this.length) {
            return null;
        }
        const removedNode = this.first;

        if(this.length === 1) {
            this.last = null;
        }

        this.first = removedNode!.next;
        this.length -= 1;

        return removedNode!.value;
    }
}

export default function stacks() {
    const myStack = new Stack();
    myStack.push('1');
    console.log(myStack.push('2'))
    console.log(myStack.first)
}