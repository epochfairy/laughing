<template>
	<el-tabs v-model="activeKey" type="border-card" closable @tab-click="onTabClick" @tab-remove="onTabRemove">
		<el-tab-pane v-for="item in panes" :key="item.key" :label="$t(item.title)" :name="item.key"> </el-tab-pane>
		<router-view :key="key" v-slot="{ Component }">
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</router-view>
	</el-tabs>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate, RouteLocationNormalized } from 'vue-router'

export default defineComponent({
	setup() {
		const route = useRoute()
		const router = useRouter()
		const panes = ref([{ title: route.meta.title, key: route.path }])
		const activeKey = ref(panes.value[0].key)
		// const newTabIndex = ref(0)
		const key = computed(() => route.path)
		const onTabadd = (nextRoute: RouteLocationNormalized) => {
			activeKey.value = nextRoute.path
			panes.value.push({
				title: nextRoute.meta.title,
				key: activeKey.value,
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
		// function
		const onTabClick = () => {
			// return activeKey.value
			// console.log(activeKey.value)
			router.push({ path: activeKey.value })
		}
		const onTabRemove = (targetKey: string) => {
			let lastIndex = 0
			panes.value.forEach((pane, i) => {
				if (pane.key === targetKey) {
					lastIndex = i - 1
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
			key,
			panes,
			activeKey,
			onTabRemove,
			// onTabadd,
			onTabClick,
		}
	},
})
</script>

<style scoped></style>
