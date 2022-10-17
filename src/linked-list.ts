import Node from './node'

class LinkedList {
  head: Node | null

  constructor() {
    this.head = null
  }

  addToHead(data: any) {
    const newHead = new Node(data)
    const currentHead = this.head

    this.head = newHead

    if (currentHead) {
      this.head.setNextNode(currentHead)
    }
  }

  removeHead() {
    const removedHead = this.head

    if (!removedHead) return

    if (removedHead.getNextNode()) {
      this.head = removedHead.getNextNode()
    }

    return removedHead.getData()
  }

  addToTail(data: any) {
    let tail = this.head

    if (!tail) {
      this.head = new Node(data)
    } else {
      while (tail?.getNextNode()) {
        tail = tail.getNextNode()
      }

      tail?.setNextNode(new Node(data))
    }
  }

  removeTail() {
    let tail = this.head
    let previousNode = null

    if (!tail) return

    while (tail?.getNextNode()) {
      previousNode = tail
      tail = tail.getNextNode()
    }

    if (previousNode) {
      previousNode.setNextNode(null)
    } else {
      this.head = null
    }

    return tail?.getData()
  }

  printList() {
    let currentNode = this.head
    let output = '<head> '

    while (currentNode) {
      output += `${currentNode.getData()} `
      currentNode = currentNode.getNextNode()
    }

    output += '<tail>'
    console.log(output)
  }
}

export default LinkedList
