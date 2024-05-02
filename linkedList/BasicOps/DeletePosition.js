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
    this.count = -1;
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

  deletePos(head, pos) {
    if (head == null) return head;
    if (this.size < pos) return -1;
    if (head) {
      this.count++;
      if (this.count == pos) {
        return head.next;
      }
    }
    const restNodes = this.deletePos(head.next, pos);
    head.next = restNodes;

    return head;
  }
}

let test = new LL();
test.addNode(3);
test.addNode(4);
test.addNode(5);
const resultNodes = test.deletePos(test.head, 2);
console.log("🚀 ~ file: DeletePosition.js:46 ~ resultNodes:", resultNodes);
