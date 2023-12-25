class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkList {
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
    this.size += 1;
  }

  searchNode(head, searchTerm) {
    if (head == null) {
      return false;
    }

    if (head.data == searchTerm) {
      return true;
    }

    return this.searchNode(head.next, searchTerm);
  }
}

const test = new LinkList();
test.addNode(5);
test.addNode(6);
test.addNode(7);
console.log(test.head);
console.log(test.searchNode(test.head, 6));
