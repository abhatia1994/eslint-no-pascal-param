const { RuleTester } = require('eslint');
const noPascalParamName = require('./no-pascal-param-name');
const ruleTester = new RuleTester({
    parserOptions:{
        "ecmaVersion": "latest",
        "sourceType": "module",
    }
});
ruleTester.run('no-pascal-variable-name', noPascalParamName, {
    valid: [{
        code: 'function getName(name) {return name}',
    },
    {
        code: 'function getName({firstName}) {return firstName}',
    }
],
    invalid: [{
        code: 'function getName(Name) {return Name}',
        errors: [{ messageId: 'noPascalParamName' }],
    },
    {
        code: 'function getName({Name}) {return Name}',
        errors: [{ messageId: 'noPascalParamName' }],
    }
]
});