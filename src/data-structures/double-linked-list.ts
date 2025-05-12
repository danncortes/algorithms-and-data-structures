class ListNode {
    value: any;
    next: ListNode | null = null;
    prev: ListNode | null = null;
    constructor(value: any) {
        this.value = value;
    }
}

class DoubleLinkedList {
    tail: ListNode | null = null;
    head: ListNode | null = null;
    length: number = 0;

    constructor() {
    }

    push(value: any) {
        const node = new ListNode(value);

        if(!this.length) {
            this.tail = node;
            this.head = node;
        } else {
            [this.tail, node.prev] = [node, this.tail];
            node.prev!.next = node;
        }

        this.length += 1;
        return this;
    }

    pop() {
        if(this.length === 0) {
            return undefined;
        }

        this.length -= 1;

        const removedNode = this.tail;

        if(!this.length) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail!.prev;
            this.tail!.next = null;
        }

        removedNode!.prev = null;

        return removedNode;
    }

    unshift(value: any) {
        if(!this.length) {
            return this.push(value);
        } else {
            const node = new ListNode(value);
            this.head!.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length += 1;
        return this
    }

    shift() {
        if(this.length === 0) {
            return undefined;
        }  

        this.length -= 1;
        const removeNode = this.head;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;

        } else {
            this.head = this.head!.next
            this.head!.prev = null;
            removeNode!.next = null;
        }
        
        return removeNode
    }

    get(index: number) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if(this.length / 2 > index) {
            let i = 0;
            let node = this.head;
            while(i < index) {
                node = node!.next;
                i += 1;
            }
            return node
        } else {
            let i = this.length - 1;
            let node = this.tail;
            while(i > index) {
                node = node!.prev;
                i -= 1;
            }
            return node
        }
    }

    set(index: number, value: any) {
        const node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }

        return false
    }

    insert(index: number, value: any) {
        if(index === 0) {
            return this.unshift(value);
        }

        if(index === this.length) {
            return this.push(value);
        }

        const beforeNode = this.get(index - 1);
        if(!beforeNode) {
            return false;
        }

        const newNode = new ListNode(value);

        beforeNode.next!.prev = newNode;
        newNode.next = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;

        this.length += 1;

        return true
    }

    remove(index: number) {
        if(index === 0) {
            return this.shift();
        }

        if(index === this.length - 1) {
            return this.pop();
        }

        const removeNode = this.get(index);
        if(!removeNode) {
            return undefined;
        }

        const afterNode = removeNode.next;
        const prevNode = removeNode.prev;

        prevNode!.next = afterNode;
        afterNode!.prev = prevNode;

        removeNode.next = null;
        removeNode.prev = null;

        this.length -= 1;

        return removeNode;
    }
    reverse(){
        const reverseNode = (node: ListNode) => {
            const prev = node.next;
            if(!node.next) {
                this.head = node;
                this.head!.next = node.prev;
                node.prev = null;
            } else if(!node.prev) {
                this.tail = node;
                this.tail!.prev = node.next;
                node.next = null;
            } else {
                node.next = node.prev;
                node.prev = prev
            }
            if(prev) {
                reverseNode(prev)
            }
        }

        if(this.length) {
            reverseNode(this.head!);
            return this
        }
        return this;
    }
}

export default function doubleLinkedList() {
    const doubleLinkedList = new DoubleLinkedList();
    doubleLinkedList.push(5).push(10).push(15).push(20);
    console.log(doubleLinkedList.reverse())
    console.log('tail', doubleLinkedList.tail)
    console.log('tail.prev', doubleLinkedList.tail?.prev)
    console.log('tail.prev.prev', doubleLinkedList.tail?.prev?.prev)
    console.log('tail.prev.prev.prev', doubleLinkedList.tail?.prev?.prev?.prev)
    console.log('tail.prev.prev.prev.prev', doubleLinkedList.tail?.prev?.prev?.prev?.prev)
}