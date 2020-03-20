// 提示模块的路由
export default [
  {
    code: 'tip',
    name: '提示',
    children: [
      {
        path: '/component/alert',
        name: 'Alert',
        meta: {
          type: 'component',
          title: 'Alert 警告',
        },
        component: () => import('../../docs/zh_CN/alert.md'),
      },
      {
        path: '/component/message',
        name: 'Message',
        meta: {
          type: 'component',
          title: 'Message 消息提示',
        },
        component: () => import('../../docs/zh_CN/message.md'),
      },
      {
        path: '/component/notice',
        name: 'Notice',
        meta: {
          type: 'component',
          title: 'Notice 通知',
        },
        component: () => import('../../docs/zh_CN/notice.md'),
      },
      {
        path: '/component/loading',
        name: 'Loading',
        meta: {
          type: 'component',
          title: 'Loading 加载中',
        },
        component: () => import('../../docs/zh_CN/loading.md'),
      },
    ],
  },
];
