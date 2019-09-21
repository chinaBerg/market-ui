export default [
  {
    path: '/input',
    name: 'Input',
    meta: {
      type: 'component',
      title: 'Input 输入框'
    },
    component: () => import('../docs/input/input.md')
  },
  {
    path: '/grid',
    name: 'Grid',
    meta: {
      type: 'component',
      title: 'Grid 栅格'
    },
    component: () => import('../docs/grid/grid.md')
  }
]
