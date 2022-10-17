import LinkedList from './linked-list'
import swapNodes from './swap-nodes'

describe('swapNodes', () => {
  it('should swap the nodes', () => {
    const testList = new LinkedList()

    for (let i = 1; i <= 10; i++) {
      testList.addToTail(i)
    }

    swapNodes(testList, 2, 8)

    const spy = jest.spyOn(global.console, 'log')
    testList.printList()
    expect(spy).toHaveBeenCalledWith('<head> 1 8 3 4 5 6 7 2 9 10 <tail>')
  })
})
