import BasicRoutes from './basic'
import NavigationRoutes from './navigation'
import FormRoutes from './form'
import TipRoutes from './tip'

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

export default [
  ...BasicRoutes,
  ...NavigationRoutes,
  ...FormRoutes,
  ...TipRoutes
]
