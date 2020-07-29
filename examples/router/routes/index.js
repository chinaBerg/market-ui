import GuideRoutes from './guide';
import BasicRoutes from './basic';
import NavigationRoutes from './navigation';
import FormRoutes from './form';
import TipRoutes from './tip';
import ViewRoutes from './view';
import OtherRoutes from './other';

/**
 * nav的路由配置
 * [
 *    {
 *      code: '', // 分类的code
 *      name: '', // 分类名称
 *      children: [ // 该分类下所有组件
 *        {
 *          path: '', // 路由
 *          name: '', // 路由Name
 *          meta: {
 *            type: '', // 路由类型，component为组件
 *            title: '' // 显示在nav的名称
 *          }
 *        }
 *      ]
 *    }
 * ]
 */

export const NavConfigs = [
  ...GuideRoutes,
  ...BasicRoutes,
  ...NavigationRoutes,
  ...FormRoutes,
  ...ViewRoutes,
  ...TipRoutes,
  ...OtherRoutes,
];

const routes = NavConfigs.map((item) => item.children).flat(Infinity);

routes.unshift({
  path: '/',
  name: 'Home',
  redirect: '/docs/install',
  meta: {
    type: 'page',
    title: 'Market-Ui|一款基于vue的ui组件库',
  },
});

export default routes;
