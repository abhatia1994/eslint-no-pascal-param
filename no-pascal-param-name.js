// no-empty-catch.js
module.exports = {
  meta: {
      messages: {
          noPascalParamName: 'First letter of the param name should not be capital.',
      },
  },
  create(context) {
    return {
      FunctionDeclaration(node) {
        const params = node.params
        params.forEach(param => {
          if (param.type === 'ObjectPattern') {
              param.properties.forEach(property => {
                  const firstChar = Array.from(property.key.name)[0]
                  if (firstChar === firstChar.toUpperCase()) {
                      context.report({ node: node, messageId: 'noPascalParamName' });
                  }
              })
          } else {
              const firstChar = Array.from(param.name)[0]
              if (firstChar === firstChar.toUpperCase()) {
                  context.report({ node: node, messageId: 'noPascalParamName' });
              }
          }
        })
      }
    }
  }
};
