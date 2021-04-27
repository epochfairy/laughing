<template>
	<Logo />
	<el-menu router v-for="child in tabList" :key="child.id">
		<MenuItem v-if="child.children" :route="child.children"></MenuItem>
	</el-menu>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import router from '@/routers'

export default defineComponent({
	components: {
		Logo: defineAsyncComponent(() => import('@/layout/commons/Logo.vue')),
		MenuItem: defineAsyncComponent(() => import('@/layout/home/aside/MenuItem.vue')),
	},
	setup() {
		const tabList = router.options.routes
		return {
			tabList,
		}
	},
})
</script>
<style scoped lang="scss"></style>
