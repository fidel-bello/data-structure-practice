class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const NewNode = new Node(value);
    this.head = NewNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const NewNode = new Node(value);
    if (!this.head) {
      this.head = new Node();
      this.tail = new Node();
    } else {
      this.tail.next = NewNode;
      this.tail = NewNode;
    }
    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(7);
console.log(myLinkedList);
console.log(myLinkedList.push(1));
