import { RouteRecordRaw } from 'vue-router'

const featureRoute: RouteRecordRaw = {
	path: '/feature',
	name: 'feature',
	component: () => import('@/components/Parent.vue'),
	meta: {
		title: 'message.feature.feature',
	},
	children: [
		{
			path: '/feature/dashboard',
			name: 'dashboard',
			component: () => import('@/views/feature/DashBoard.vue'),
			meta: {
				title: 'message.feature.dashboard',
			},
		},
		{
			path: '/feature/system',
			name: 'system',
			component: () => import('@/components/Parent.vue'),
			meta: {
				title: 'message.feature.system',
			},
			children: [
				{
					path: '/feature/system/setting',
					name: 'systemSetting',
					component: () => import('@/components/Parent.vue'),
					meta: {
						title: 'message.feature.setting',
					},
					children: [
						{
							path: '/feature/system/setting/menu1',
							name: 'systemSettingMenu1',
							component: () => import('@/components/Parent.vue'),
							meta: {
								title: 'message.feature.menu1',
							},
							children: [
								{
									path: '/feature/system/setting/menu1/menu1_1',
									name: 'systemSettingMenu1Menu1_1',
									component: () => import('@/views/feature/system/Menu1_2.vue'),
									meta: {
										title: 'message.feature.menu1_1',
									},
								},
								{
									path: '/feature/system/setting/menu1/menu1_2',
									name: 'systemSettingMenu1Menu1_2',
									component: () => import('@/views/feature/system/Menu1_2.vue'),
									meta: {
										title: 'message.feature.menu1_2',
									},
								},
							],
						},
						{
							path: '/feature/system/setting/menu2',
							name: 'systemSettingMenu2',
							component: () => import('@/views/feature/system/Menu2.vue'),
							meta: {
								title: 'message.feature.menu2',
							},
						},
					],
				},
				{
					path: '/feature/system/user',
					name: 'systemUser',
					component: () => import('@/views/feature/system/User.vue'),
					meta: {
						title: 'message.feature.user',
					},
				},
			],
		},
	],
}

export default featureRoute
