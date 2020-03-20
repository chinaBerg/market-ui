// 提示模块的路由
export default [
  {
    code: 'other',
    name: '其他',
    children: [
      {
        path: '/component/backtop',
        name: 'Backtop',
        meta: {
          type: 'component',
          title: 'Backtop 回到顶部',
        },
        component: () => import('../../docs/zh_CN/backtop.md'),
      },
    ],
  },
];
