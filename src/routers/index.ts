import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/layout/Index.vue'

import featureRoute from '@/routers/modules/features'

// 定义静态路由
const staticRoutes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/layout/Login.vue'),
		meta: {
			title: 'message.login.title',
		},
	},
	{
		path: '/',
		name: 'index',
		component: Index,
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/Home.vue'),
				meta: {
					title: 'message.router.home',
				},
			},
			featureRoute,
			{
				path: '/about',
				name: 'about',
				component: () => import('@/views/About.vue'),
				meta: {
					title: 'message.router.about',
				},
			},
		],
	},
]

// 定义404界面

// 获取目录下的 .vue 全部文件，参考 vite：import.meta.glob

// 添加静态路由

const router = createRouter({
	history: createWebHashHistory(),
	routes: staticRoutes,
})

// 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由

// 后端控制路由，后端路由 component 转换函数

// 多级嵌套数组处理成一维数组

// 多级嵌套数组处理后的一维数组，再处理成 `定义动态路由` 的格式
// 只保留二级：也就是二级以上全部处理成只有二级，keep-alive 支持二级缓存

// 判断路由 auth 中是否包含当前登录用户权限字段

// 递归过滤有权限的路由

// 获取当前用户的权限去比对路由表，用于动态路由的添加

// 比对后的路由表，进行重新赋值

// 添加动态路由

// 删除/重置路由

// 初始化方法，防止刷新时丢失

// 初始化方法执行

// 导出路由
export default router
