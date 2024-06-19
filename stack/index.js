class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop(element) {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  reverse() {
    this.stack.reverse();
  }

  contains(element) {
    return this.stack.includes(element);
  }

  clear() {
    this.stack = [];
  }

  printStack() {
    // return this.stack.toString();
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
}

let myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.size());
console.log(myStack.printStack());
myStack.pop();
console.log(myStack.size());
console.log(myStack.printStack());
console.log(myStack.peek());
console.log(myStack.contains(10));
console.log(myStack.isEmpty());
myStack.reverse();
console.log(myStack.printStack());
myStack.clear();
console.log(myStack.isEmpty());
