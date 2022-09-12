import babel from '@babel/core'

const StringLiteralVisitor = {
  StringLiteral(path) {
    if (path.node.value.startsWith('%c')) {
      const [_, ...rest] = path.node.value.split('%c')
      path.node.value = rest.pop()
    }

    if (path.node.value.includes('color:')) {
      path.remove()
    }
  },
}

const removeConsoleLogDecorations = (code) =>
  babel.transformSync(code, {
    plugins: [
      // My first babel plugin 😎😎
      function removeConsoleLogFormattingPlugin() {
        return {
          visitor: {
            CallExpression(path) {
              path.traverse(StringLiteralVisitor)
            },
          },
        }
      },
    ],
  })

export { removeConsoleLogDecorations }
