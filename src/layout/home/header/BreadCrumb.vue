<template>
	<el-breadcrumb class="app-breadcrumb" separator=">">
		<transition-group appear name="breadcrumb">
			<el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
				<span v-if="item.redirect === 'noRedirect' || index == levelList.length - 1">{{ $t(item.meta.title) }}</span>
				<a v-else @click.prevent="onBreadcrumbClick(item)">
					{{ $t(item.meta.title) }}
				</a>
			</el-breadcrumb-item>
		</transition-group>
	</el-breadcrumb>
</template>

<script lang="ts">
import { ref, defineComponent, Ref, onMounted } from 'vue'
import { useRoute, useRouter, RouteLocationMatched, onBeforeRouteUpdate, RouteLocationNormalized } from 'vue-router'

export default defineComponent({
	name: 'BreadCrumb',
	setup() {
		const levelList: Ref<RouteLocationMatched[]> = ref([])
		const route = useRoute()
		const router = useRouter()
		// 处理面包屑数据
		const getBreadcrumb = (nextRoute: RouteLocationNormalized): void => {
			const matched = nextRoute.matched.filter((item) => item.meta && item.meta.title)
			levelList.value = matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false)
		}
		// 路由更新时
		onBeforeRouteUpdate((to) => {
			getBreadcrumb(to)
		})
		// 首次加载Home使用
		onMounted(() => getBreadcrumb(route))
		// 面包屑点击时
		const onBreadcrumbClick = (item: RouteLocationMatched): any => {
			const { redirect } = item
			if (redirect) {
				router.push(redirect.toString())
			}
			// 父节点为submenu 无对应vue，暂不跳转
			// router.push(path)
		}

		return { levelList, onBreadcrumbClick }
	},
})
</script>

<style lang="scss" scoped></style>
