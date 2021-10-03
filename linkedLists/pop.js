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
      const newNode = new Node(value);
      if (!this.head) {
        this.head = new Node();
        this.tail = new Node();
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    pop() {
        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        } 
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0 ) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
  }
  
  let myLinkedList = new LinkedList(0);
  console.log(myLinkedList);
  console.log(myLinkedList.push(2));
  console.log(myLinkedList.pop(0));
  