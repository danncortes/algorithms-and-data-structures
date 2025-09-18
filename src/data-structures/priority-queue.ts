class PrioriryQueue {
    values: PriorityQueueNode[] = [];

    enqueue(value: string, priority: number) {
        function bubbleUp(index: number, values: PriorityQueueNode[]): PriorityQueueNode[] {
            const num = values[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = values[parentIndex];
            if(parent && parent.priority >= num.priority) {
                values[parentIndex] = num;
                values[index] = parent;
                return bubbleUp(parentIndex, values);
            } else {
                return values;
            }
        }

        const node = new PriorityQueueNode(value, priority);
        this.values.push(node);
        this.values = bubbleUp(this.values.length - 1, this.values);
    }

    dequeue(): PriorityQueueNode | undefined {
        function sinkDown(index: number, values: PriorityQueueNode[]): PriorityQueueNode[] {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            if(rightChildIndex || leftChildIndex) {
                const rightChild = values[rightChildIndex];
                const leftChild = values[leftChildIndex];
                const parent = values[index];
                if(rightChild && leftChild && rightChild.priority < leftChild.priority) {
                    values[index] = rightChild;
                    values[rightChildIndex] = parent;
                    return sinkDown(rightChildIndex, values);
                } else if(leftChild && rightChild && leftChild.priority < rightChild.priority) {
                    values[index] = leftChild;
                    values[leftChildIndex] = parent;
                    return sinkDown(leftChildIndex, values);
                }
                return values;
            }
            return values;
        }

        if(this.values.length) {
            const root = this.values[0];
            const last = this.values.pop();
            this.values[0] = last!;
            this.values = sinkDown(0, this.values);
            return root;
        }
    }
}

class PriorityQueueNode {
    value: string;
    priority: number;
    constructor(value: string, priority: number) {
        this.value = value;
        this.priority = priority;
    }
}

export default function prioriryQueue() {
    const priorityQueue = new PrioriryQueue();
    priorityQueue.enqueue('Walk dog', 2);
    priorityQueue.enqueue('Go out', 3);
    priorityQueue.enqueue('Pay bill', 1);
    priorityQueue.enqueue('Learn', 1);
    priorityQueue.dequeue();
    console.log(priorityQueue);
}