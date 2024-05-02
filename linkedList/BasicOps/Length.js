class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNode(val) {
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }

    this.size++;
  }

  getLength(head) {
    if (head == null) return 0;
    else return 1 + this.getLength(head.next);
  }
}

const test = new LL();
test.addNode(1);
test.addNode(2);
test.addNode(3);
test.addNode(4);
test.addNode(5);
console.log(test.head);
console.log(test.getLength(test.head));
