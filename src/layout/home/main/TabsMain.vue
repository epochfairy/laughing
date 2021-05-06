<template>
	<el-tabs v-model="activeKey" type="border-card" closable @tab-remove="onTabRemove" @tab-click="onTabClick">
		<template v-for="item in panes" :key="item.key">
			<el-tab-pane :label="$t(item.title)" :name="item.key"> </el-tab-pane>
		</template>
		<router-view v-slot="{ Component }">
			<keep-alive :include="cacheList">
				<component :is="Component" />
			</keep-alive>
		</router-view>
	</el-tabs>
</template>

<script lang="ts">
import { ref, defineComponent, computed, onMounted } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate, RouteLocationNormalized, RouteRecordName } from 'vue-router'

export default defineComponent({
	setup() {
		const route = useRoute()
		const router = useRouter()
		const panes = ref([{ title: route.meta.title, key: route.path, name: route.name }])
		const cacheList = ref(<any>[])
		const activeKey = ref(panes.value[0].key)
		const key = computed(() => route.path)

		const onTabadd = (nextRoute: RouteLocationNormalized) => {
			activeKey.value = nextRoute.path
			cacheList.value.push(nextRoute.name)
			panes.value.push({
				title: nextRoute.meta.title,
				key: activeKey.value,
				name: nextRoute.name,
			})
		}

		onBeforeRouteUpdate((to) => {
			let flag = true
			panes.value.forEach((pane, i) => {
				if (pane.key === to.path) {
					flag = false
					activeKey.value = panes.value[i].key
				}
			})
			if (flag) {
				onTabadd(to)
			}
		})

		onMounted(() => {
			const { name } = router.currentRoute.value
			cacheList.value.push(name)
		})

		const onTabClick = () => {
			router.push({ path: activeKey.value })
		}

		const onTabRemove = (targetKey: string) => {
			let lastIndex = 0
			panes.value.forEach((pane, i) => {
				if (pane.key === targetKey) {
					lastIndex = i - 1
					const { name } = pane
					if (name) {
						cacheList.value = cacheList.value.filter((item: RouteRecordName) => item !== name)
					}
				}
			})
			panes.value = panes.value.filter((pane) => pane.key !== targetKey)
			if (panes.value.length && activeKey.value === targetKey) {
				if (lastIndex >= 0) {
					activeKey.value = panes.value[lastIndex].key
				} else {
					activeKey.value = panes.value[0].key
				}
			}
			router.push(activeKey.value)
		}

		return {
			cacheList,
			key,
			panes,
			activeKey,
			onTabRemove,
			onTabClick,
		}
	},
})
</script>

<style scoped></style>
