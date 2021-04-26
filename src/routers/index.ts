import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 定义静态路由
const staticRoutes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/layout/Login.vue'),
		meta: {
			title: '登陆',
		},
	},
	{
		path: '/',
		name: '/',
		component: () => import('@/layout/Home.vue'),
		// redirect: '/home',
		meta: {
			isKeepAlive: true,
		},
	},
	// 	children: [
	// 		{
	// 			path: '/home',
	// 			name: 'home',
	// 			component: () => import('@/views/Home.vue'),
	// 			meta: {
	// 				title: 'message.router.home',
	// 				isLink: '',
	// 				isHide: false,
	// 				isKeepAlive: true,
	// 				isAffix: true,
	// 				isIframe: false,
	// 			},
	// 		},
	// 		{
	// 			path: '/system',
	// 			name: 'system',
	// 			component: () => import('@/components/Parent.vue'),
	// 			redirect: '/system/menu',
	// 			meta: {
	// 				title: 'message.router.system',
	// 				isLink: '',
	// 				isHide: false,
	// 				isKeepAlive: true,
	// 				isAffix: false,
	// 				isIframe: false,
	// 			},
	// 			children: [
	// 				{
	// 					path: '/system/menu',
	// 					name: 'systemMenu',
	// 					component: () => import('@/views/system/System.vue'),
	// 					meta: {
	// 						title: 'message.router.system_menu',
	// 						isLink: '',
	// 						isHide: false,
	// 						isKeepAlive: true,
	// 						isAffix: false,
	// 						isIframe: false,
	// 					},
	// 				},
	// 				{
	// 					path: '/system/user',
	// 					name: 'systemUser',
	// 					component: () => import('@/views/system/User.vue'),
	// 					meta: {
	// 						title: 'message.router.system_user',
	// 						isLink: '',
	// 						isHide: false,
	// 						isKeepAlive: true,
	// 						isAffix: false,
	// 						isIframe: false,
	// 					},
	// 				},
	// 			],
	// 		},
	// 	],
	// },
]

// 定义404界面

// 获取目录下的 .vue 全部文件，参考 vite：import.meta.glob

// 添加静态路由
const router = createRouter({
	history: createWebHistory(),
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
