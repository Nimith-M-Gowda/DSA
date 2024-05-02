class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNode(val) {
    let newNode = new Node(val);
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

  delete(head, val) {
    if (head == null) return head;
    if (head.data == val) {
      return head.next;
    }
    let restNode = this.delete(head.next, val);
    head.next = restNode;
    return head;
  }
}

const test = new LL();
test.addNode(3);
test.addNode(4);
test.addNode(5);
test.addNode(8);
let checker = test.delete(test.head, 8);
console.log(checker);
