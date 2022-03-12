//
class ManualNode
 {
  constructor(data) {
    this.data = data;
    this.next = this.next;
  }
}

function main() {
  let node1 = new ManualNode(10);
  let node2 = new ManualNode(15);
  let node3 = new ManualNode(8);
  let node4 = new ManualNode(6);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = null;

  console.log(node1, node2.next, node3.next, node4.next, node4.data);
}

main();
