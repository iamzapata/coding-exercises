import { removeConsoleLogDecorations } from './index'

describe('removeConsoleLogDecorations', () => {
  it('should remove console.log decorations', () => {
    function test() {
      const someVar = 100
      console.log('%cHello World', 'color: red', someVar)
    }
    const result = removeConsoleLogDecorations(test.toString())
    expect(result.code).toEqual(
      'function test() {\n  ' +
        'const someVar = 100;\n  ' +
        'console.log("Hello World", someVar);\n' +
        '}'
    )
  })
})
