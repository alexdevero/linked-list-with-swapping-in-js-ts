import Node from './node'

describe('Node', () => {
  let node: Node

  beforeEach(() => {
    node = new Node('foo')
  })

  it('should have a data property', () => {
    expect(node.data).toBe('foo')
  })

  it('should have a next property', () => {
    expect(node.next).toBeNull()
  })

  describe('setNextNode', () => {
    it('should set the next property', () => {
      const nextNode = new Node('bar')

      node.setNextNode(nextNode)

      expect(node.next).toBe(nextNode)
    })

    it('should throw an error if the argument is not a Node', () => {
      expect(() => node.setNextNode('bar' as any)).toThrowError(
        'Next node must be a member of the Node class.'
      )
    })
  })

  describe('getNextNode', () => {
    it('should return the next node', () => {
      const nextNode = new Node('bar')

      node.setNextNode(nextNode)

      expect(node.getNextNode()).toBe(nextNode)
    })
  })

  describe('getData', () => {
    it('should return the data', () => {
      expect(node.getData()).toBe('foo')
    })
  })
})
