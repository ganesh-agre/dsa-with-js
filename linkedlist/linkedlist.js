class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert at beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // insert at end
  insertAtTheEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let last = this.head;
    while (last.next) {
      last = last.next;
    }

    last.next = newNode;
  }

  //insert at given key
  insertAtGivenKey(key, data) {
    const newNode = new Node(data);
    if (!this.head) {
      console.log("list can not be empty");
      return;
    }

    if (this.head.data === key) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current) {
      if (current.next.data === key) {
        let nodeAtGivenPos = current.next;
        current.next = newNode;
        newNode.next = nodeAtGivenPos;
        return;
      }
      current = current.next;
    }
    console.log("No node found with key: ", key);
  }

  insertAfterGivenNode(prevNode, data) {
    if (!prevNode) {
      console.log("preve node can not be null");
      return;
    }
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  }

  deleteNodeAtBeginning() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    this.head = this.head.next;
  }

  deleteFromEnd() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    if (!this.head.next) {
      this.head = mull;
    }

    let current = this.head;
    while (!current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  deleteByGivenKey(key) {
    if (!this.head) {
      console.log("list is empty");
      return;
    }

    if (this.head.data == key) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (!current.next) {
      if (current.next.data === key) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }

    console.log("No node found with key: ", key);
  }

  searckByKey(key) {
    if (!this.head) {
      console.log("list is empty");
      return;
    }

    let current = this.head;
    while (current) {
      if (current.data == key) {
        return true;
      }
      current = current.next;
    }
  }

  printList() {
    if (!this.head) {
      console.log("list is empty");
    }
    let data = [];
    let current = this.head;
    while (current) {
      data.push(current.data);
      current = current.next;
    }

    console.log(data.join(" -> "));
  }

  reverseList() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.insertAtBeginning(4);
myLinkedList.insertAtBeginning(5);
myLinkedList.insertAtBeginning(6);
myLinkedList.insertAtBeginning(7);
myLinkedList.printList();
myLinkedList.insertAtGivenKey(7, 5.5);
myLinkedList.printList();
console.log("Reversed List");
myLinkedList.reverseList();
myLinkedList.printList();
