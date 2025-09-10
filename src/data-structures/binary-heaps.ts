class BinaryHeapMax {
    values: number[] = [];

    
    insert(value: number) {
        function bubbleUp(index: number, values: number[]): number[] {
            const num = values[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = values[parentIndex];
            if(parent < num) {
                values[parentIndex] = num;
                values[index] = parent;
                return bubbleUp(parentIndex, values);
            } else {
                return values;
            }
        }
        this.values.push(value);
        this.values = bubbleUp(this.values.length - 1, this.values);
    }

    extractMax() {
        function sinkDown(index: number, values: number[]): number[] {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            if(rightChildIndex || leftChildIndex) {
                const rightChild = values[rightChildIndex];
                const leftChild = values[leftChildIndex];
                const parent = values[index];
                if(rightChild > leftChild) {
                    values[index] = rightChild;
                    values[rightChildIndex] = parent;
                    return sinkDown(rightChildIndex, values);
                } else if(leftChild > rightChild) {
                    values[index] = leftChild;
                    values[leftChildIndex] = parent;
                    return sinkDown(leftChildIndex, values);
                }
                return values;
            }
            return values;
        }

        if(this.values.length) {
            const last = this.values.pop();
            this.values[0] = last!;
            this.values = sinkDown(0, this.values);
        }
    }
}

export default function binaryHeaps() {
    const binaryHeap = new BinaryHeapMax();
    binaryHeap.insert(55);
    binaryHeap.insert(39);
    binaryHeap.insert(41);
    binaryHeap.insert(18);
    binaryHeap.insert(27);
    binaryHeap.insert(12);
    binaryHeap.insert(33);
    binaryHeap.extractMax();
    console.log("🚀 ~ binaryHeaps ~ binaryHeap:", binaryHeap)
}