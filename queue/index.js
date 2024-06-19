class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  frontElement() {
    return this.queue[0];
  }

  lastElement() {
    return this.queue(this.queue.length - 1);
  }

  clear() {
    this.queue = [];
  }

  printQueue() {
    let str = "";
    for (let index = 0; index < this.queue.length; index++) {
      str += this.queue[index] + "\n";
    }
    return str;
  }
}

//Usage
let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
console.log(myQueue.printQueue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
console.log(myQueue.printQueue());
myQueue.clear();
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue());
