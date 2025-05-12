class ListNode {
  next: this | null;
  value: any;

  constructor(value: any) {
    this.next = null;
    this.value = value;
  }
}

class SinglyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any): this {
    const node = new ListNode(value);

    if (this.length === 0) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  private findElementBeforeTail(node: ListNode): ListNode {
    if (node.next === this.tail) {
      return node;
    }
    return this.findElementBeforeTail(node.next!);
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const oldHead = this.head;
    this.head = this.head!.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  unshift(value: any) {
    const newNode = new ListNode(value);

    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  pop(): this | undefined {
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else if (this.length === 0) {
      return undefined;
    }

    const elemBeforeTail = this.findElementBeforeTail(this.head!);
    elemBeforeTail.next = null;
    this.tail = elemBeforeTail;
    this.length -= 1;

    return this;
  }

  get(index: number) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }

    let i = 0;
    let node = this.head;

    while (i < index) {
      node = node!.next;
      i++;
    }

    return node;
  }

  set(index: number, value: any) {
    if (index === undefined || value === undefined) {
      return null;
    }

    const node = this.get(index);

    if (!node) {
      return null;
    }

    node.value = value;
    return true;
  }

  insert(index: number, value: any) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new ListNode(value);
      const oldNode = this.get(index - 1);
      newNode.next = oldNode!.next;
      oldNode!.next = newNode;
      this.length++;
    }

    return true;
  }

  remove(index: number): undefined | boolean | ListNode {
    let result: undefined | boolean | ListNode = undefined;

    if (index < 0 || index >= this.length) {
      return result;
    } else if (index === 0) {
      result = !!this.shift();
    } else if (index === this.length - 1) {
      result = !!this.pop();
    } else {
      let prev = this.get(index - 1);
      let removed = prev!.next;
      prev!.next = removed!.next;

      result = removed!;
    }

    this.length--;
    return result;
  }

  reverse() {
    let i = 0;

    let node = this.head;
    this.tail = node;
    let next: ListNode | null = null;
    let prev = null;

    while (i < this.length) {
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;

      i++;
    }

    this.head = prev;

    return this;
  }
}

  
export default function singlyLinkedList() {
  const myList = new SinglyLinkedList();
  myList.push('1');
  myList.push('3');
  myList.push('5');
  myList.push('7');
  myList.push('9');
  //myList.reverse();
  console.log('Removed --', myList.remove(2));
  console.log('List --', myList);
};

