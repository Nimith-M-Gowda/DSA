class Node {
  constructor(val) {
    this.data = val;
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

  reverse(head) {
    if (head == null || head.next == null) return head;

    let newHead = this.reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }
}

let test = new LL();
test.addNode(3);
test.addNode(5);
test.addNode(7);
// console.log("🚀 ~ file: ReverseRecursion.js:34 ~ before:", test.head);
const val = test.reverse(test.head);
console.log("🚀 ~ file: ReverseRecursion.js:34 ~ after:", val);
