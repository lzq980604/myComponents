const camelias = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())).replace(/\s+/g, '');
};

module.exports = function (plop) {
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: '请输入组件名称'
            },
            {
                type: 'list',
                choices: ['pages', 'components'],
                default: 'pages',
                name: 'type',
                message: '请选择创建路径'
            },

        ],
        actions: (data) => {
            const actions = []
            const { name, type } = data
            const path = type == 'pages' ? 'pages' : 'components'
            const lessName = `.${camelias(name)}`

            const pageActions = {
                type: 'add',
                path: `src/${path}/{{ name }}/index.tsx`,
                templateFile: 'templates/page.hbs',
                data: {
                    name: `${name}Box`
                }
            }
            const componentActions = {
                type: 'add',
                path: `src/${path}/{{ name }}/index.tsx`,
                templateFile: 'templates/component.hbs',
                data: {
                    name: `${name}Box`
                }
            }
            const lessActions = {
                type: 'add', // 动作类型
                path: `src/${path}/{{ name }}/index.less`, // '{{  }}' 双大括号内设置动态参数
                templateFile: 'templates/styles.hbs', // 模板文件地址， 使用hbs文件
                data: {
                    lessName
                },
            };
            const typeArr = {
                pages: pageActions,
                components: componentActions,
            }
            actions.push(typeArr[type])
            return [...actions, lessActions]

        }
    });
};