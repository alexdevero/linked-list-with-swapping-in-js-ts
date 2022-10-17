import LinkedList from './linked-list'
import swapNodes from './swap-nodes'

const testList = new LinkedList()
for (let i = 1; i <= 10; i++) {
  testList.addToTail(i)
}

testList.printList()
swapNodes(testList, 2, 8)
testList.printList()
