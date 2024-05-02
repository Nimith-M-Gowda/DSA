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

  isIdentical(_ll1, _ll2) {
    if (_ll1.size != _ll2.size) {
      return false;
    } else {
      let temp1 = _ll1.head;
      let temp2 = _ll2.head;
      while (temp1 != null && temp2 != null) {
        if (temp1.data != temp2.data) {
          return false;
        } else {
          temp1 = temp1.next;
          temp2 = temp2.next;
        }
      }
      return true;
    }
  }
}

let test1 = new LL();
test1.addNode(1);
test1.addNode(2);
test1.addNode(3);

let test2 = new LL();
test2.addNode(1);
test2.addNode(2);
test2.addNode(4);

let test = new LL();
let result = test.isIdentical(test1, test2);
console.log("🚀 ~ file: Identical.js:58 ~ result:", result);
// console.log("🚀 ~ file: Identical.js:32 ~ test:", test.head);
