class QueueNode {
    value: any;
    next: QueueNode | null = null;
    constructor(value: any) {
        this.value = value;
    }
}

class Queue {
    last: QueueNode | null = null;
    first: QueueNode | null = null;
    length: number = 0;

    enqueue(value: any) {
        const node = new QueueNode(value);

        if(!this.length) {
            this.first = node;
            this.last = node;
        } else {
            this.last!.next = node;
            this.last = node;
        }

        return ++this.length;
    }

    dequeue() {
        if(!this.length) {
            return null;
        } 
        
        const removedNode = this.first;
        if(this.first === this.last) {
            this.last = null
        }
        
        this.first = removedNode?.next || null;
        
        
        this.length -= 1;
        
        return removedNode?.value || null;
    }
}