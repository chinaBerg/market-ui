export default [
  {
    code: 'guide',
    name: '指南',
    children: [
      {
        path: '/docs/install',
        name: 'Install',
        meta: {
          type: 'component',
          title: '安装',
        },
        component: () => import('@/docs/zh_CN/install.md'),
      },
      {
        path: '/docs/quick_start',
        name: 'QuickStart',
        meta: {
          type: 'component',
          title: '快速开始',
        },
        component: () => import('@/docs/zh_CN/quick-start.md'),
      },
    ],
  },
];
