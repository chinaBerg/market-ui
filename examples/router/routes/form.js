// routes of form
export default [
  {
    code: 'form',
    name: '表单',
    children: [
      {
        path: '/component/input',
        name: 'Input',
        meta: {
          type: 'component',
          title: 'Input 输入框'
        },
        component: () => import('../../docs/zh_CN/input.md')
      }
    ]
  }
]
