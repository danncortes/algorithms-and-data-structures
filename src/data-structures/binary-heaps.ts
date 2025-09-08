class BinaryHeapMax {
    values: number[] = [];

    bubbleUp(index: number, values: number[]): number[] {
        const num = values[index];
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = values[parentIndex];
        if(parent < num) {
            values[parentIndex] = num;
            values[index] = parent;
            return this.bubbleUp(parentIndex, values);
        } else {
            return values;
        }
    }

    insert(value: number) {
        this.values.push(value);
        this.values = this.bubbleUp(this.values.length - 1, this.values);
        console.log(this.values)
    }
}

export default function binaryHeaps() {
    const binaryHeap = new BinaryHeapMax();
    binaryHeap.insert(55);
    binaryHeap.insert(41);
    binaryHeap.insert(70);
    console.log("🚀 ~ binaryHeaps ~ binaryHeap:", binaryHeap)
}