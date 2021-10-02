/** common methods of linked lists
 
 class LinkedList {
 constuctor(value){
 creates new Node
 }
 push(value) {
 push created new Node
 add Node to the end
 }

 unshift(value) {
 creates new Node
 add Node to beginning
 }

  insert(value) {
  creates new  Node
  inserts Node
  }
  }
 **/

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
  }

  let myLinkedList = new LinkedList(4);

  console.log(myLinkedList)