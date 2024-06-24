class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNodeAtbeginning(data) {
    let newNode = new Node(data, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (this.tail == null) {
      this.tail = this.head;
    }
  }

  addNodeAtEnd(data) {
    let newNode = new Node(data, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = this.tail;
    }
  }

  removeNodeFromBeginning() {
    if (!this.head) {
      console.log("DLL is blank");
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  removeNodeFromEnd() {
    if (!this.tail) {
      console.log("blank DLL");
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  reverseList() {
    if (!this.head) {
      console.log("blank DLL");
      return;
    }
    let temp = null;
    let current = this.head;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      //move to next node
      current = current.prev;
    }

    this.tail = this.head;
    this.head = temp.prev;
  }

  insertNodeAfterGivenNode(prevNode, data) {
    if (!prevNode) {
      console.log("prev node not provided");
      return;
    }
    const newNode = new Node(data, prevNode.next, prevNode);
    if (prevNode.next !== null) {
      prevNode.next.prev = newNode;
    } else {
      this.tail = newNode;
    }
    prevNode.next = newNode;
  }

  printList() {
    if (!this.head) {
      console.log("no node present in list");
      return;
    }
    let current = this.head;
    let nodesArr = [];
    while (current) {
      nodesArr.push(current.data);
      current = current.next;
    }
    console.log(nodesArr.join(" -> "));
  }
}

const dblLinkedList = new DoublyLinkedList();
dblLinkedList.addNodeAtbeginning(5);
dblLinkedList.addNodeAtbeginning(4);
dblLinkedList.addNodeAtEnd(6);
dblLinkedList.addNodeAtEnd(7);
dblLinkedList.printList();
//dblLinkedList.removeNodeFromBeginning();
//dblLinkedList.removeNodeFromEnd();
dblLinkedList.reverseList();
//console.log(dblLinkedList.head);
//console.log(dblLinkedList.tail);
dblLinkedList.printList();
dblLinkedList.insertNodeAfterGivenNode(dblLinkedList.head.next.next.next, 3.5);
dblLinkedList.printList();
