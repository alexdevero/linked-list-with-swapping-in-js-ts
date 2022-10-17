import LinkedList from './linked-list'

describe('LinkedList', () => {
  let list: LinkedList

  beforeEach(() => {
    list = new LinkedList()
  })

  it('should have a head property', () => {
    expect(list.head).toBeNull()
  })

  describe('addToHead', () => {
    it('should add a node to the head of the list', () => {
      list.addToHead('foo')

      expect(list.head?.getData()).toBe('foo')
    })

    it('should add a second node to the head of the list', () => {
      list.addToHead('foo')
      list.addToHead('bar')

      expect(list.head?.getData()).toBe('bar')
    })

    it('should add a third node to the head of the list', () => {
      list.addToHead('foo')
      list.addToHead('bar')
      list.addToHead('baz')

      expect(list.head?.getData()).toBe('baz')
    })
  })

  describe('removeHead', () => {
    it('should remove the head node from the list', () => {
      list.addToHead('foo')
      list.addToHead('bar')

      list.removeHead()

      expect(list.head?.getData()).toBe('foo')
    })

    it('should remove the head node and update the list head to be the next node', () => {
      list.addToHead('foo')
      list.addToHead('bar')
      list.addToHead('baz')

      list.removeHead()

      expect(list.head?.getData()).toBe('bar')
    })

    it('should remove the head node and update the list head to null if there are no nodes in the list', () => {
      list.removeHead()

      expect(list.head).toBeNull()
    })

    it('should return the data of the removed node', () => {
      list.addToHead('foo')

      const removedData = list.removeHead()

      expect(removedData).toBe('foo')
    })
  })

  describe('addToTail', () => {
    it('should add a node to the tail of the list', () => {
      list.addToTail('foo')

      expect(list.head?.getData()).toBe('foo')
    })

    it('should add a second node to the tail of the list', () => {
      list.addToTail('foo')
      list.addToTail('bar')

      expect(list.head?.getNextNode()?.getData()).toBe('bar')
    })

    it('should add a third node to the tail of the list', () => {
      list.addToTail('foo')
      list.addToTail('bar')
      list.addToTail('baz')

      expect(list.head?.getNextNode()?.getNextNode()?.getData()).toBe('baz')
    })
  })

  describe('removeTail', () => {
    it('should remove the tail node from the list', () => {
      list.addToTail('foo')
      list.addToTail('bar')

      list.removeTail()

      expect(list.head?.getNextNode()).toBeNull()
    })

    it('should remove the tail node and update the list tail to be the previous node', () => {
      list.addToTail('foo')
      list.addToTail('bar')
      list.addToTail('baz')

      list.removeTail()

      expect(list.head?.getNextNode()?.getData()).toBe('bar')
    })

    it('should remove the tail node and update the list tail to null if there is only one node in the list', () => {
      list.addToTail('foo')

      list.removeTail()

      expect(list.head).toBeNull()
    })

    it('should remove the tail node and update the list tail to null if there are no nodes in the list', () => {
      list.removeTail()

      expect(list.head).toBeNull()
    })

    it('should return the data of the removed node', () => {
      list.addToTail('foo')

      const removedData = list.removeTail()

      expect(removedData).toBe('foo')
    })
  })

  describe('has a method printList that prints the list to the console' , () => {
    it('should print the list to the console', () => {
      list.addToTail('foo')
      list.addToTail('bar')
      list.addToTail('baz')

      const spy = jest.spyOn(global.console, 'log')
      list.printList()
      expect(spy).toHaveBeenCalledWith('<head> foo bar baz <tail>')
    })
  })
})
