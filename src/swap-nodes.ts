import LinkedList from './linked-list'

function swapNodes(list: LinkedList, data1: any, data2: any) {
  console.log(`Swapping ${data1} and ${data2}:`)

  let node1 = list.head
  let node2 = list.head
  let node1Previous = null
  let node2Previous = null

  if (data1 === data2) {
    console.log('Elements are the same - no swap to be made')
    return
  }

  while (node1 !== null) {
    if (node1.getData() === data1) {
      break
    }

    node1Previous = node1
    node1 = node1.getNextNode()
  }

  while (node2 !== null) {
    if (node2.getData() === data2) {
      break
    }

    node2Previous = node2
    node2 = node2.getNextNode()
  }

  if (node1 === null || node2 === null) {
    console.log('Swap not possible - one or more element is not in the list')
    return
  }

  if (node1 && node2) {
    if (node1Previous) {
      node1Previous.setNextNode(node2)
    } else {
      list.head = node2
    }

    if (node2Previous) {
      node2Previous.setNextNode(node1)
    } else {
      list.head = node1
    }

    const temp = node1.getNextNode()
    node1.setNextNode(node2.getNextNode())
    node2.setNextNode(temp)
  }
}

export default swapNodes
