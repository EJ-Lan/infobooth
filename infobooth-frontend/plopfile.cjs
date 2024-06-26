module.exports = function (plop) {
    
    // Component generator
    plop.setGenerator('component', {
        description: 'Generate a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'plop-templates/Component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.css',
                templateFile: 'plop-templates/Component.css.hbs'
            }
        ]
    });
};