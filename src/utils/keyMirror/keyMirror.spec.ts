import { keyMirror } from './index'

describe('keyMirror', () => {
  it('throws if list is not iterable', () => {
    expect(() => keyMirror()).toThrowError("'list' argument is not an Array.")
  })

  it('throws if items array is empty', () => {
    expect(() => keyMirror([])).toThrowError(
      "keyMirror: 'list' argument is empty. Expected a non-empty array."
    )
  })

  it('throws error if list item is not a string or a number', () => {
    expect(() => keyMirror([0, '1', true])).toThrowError(
      'keyMirror: list item must be a string or a number, got "boolean"'
    )

    expect(() => keyMirror([0, '1', undefined])).toThrowError(
      'keyMirror: list item must be a string or a number, got "undefined"'
    )
  })
  it('returns object with the list items mirrored in keys and values as strings', () => {
    expect(keyMirror(['a', 'b', 'c'])).toEqual({
      a: 'a',
      b: 'b',
      c: 'c',
    })

    expect(keyMirror([1, 2, 3, 4])).toEqual({
      1: '1',
      2: '2',
      3: '3',
      4: '4',
    })
  })
})
