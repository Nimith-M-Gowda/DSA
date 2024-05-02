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

  addItem(value) {
    const newNode = new Node(value);
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

  insertAfterNode(nodeData, newValue) {
    if (this.head == null) {
      return;
    } else {
      let temp = this.head;
      while (temp != null) {
        if (temp.data == nodeData) {
          const newNode = new Node(newValue);
          newNode.next = temp.next;
          temp.next = newNode;
          this.size++;
          return;
        }
        temp = temp.next;
      }
      return;
    }
  }
}

const test = new LL();
test.addItem(5);
test.addItem(6);
test.addItem(7);

test.insertAfterNode(5, 8);
console.log(test.head);
