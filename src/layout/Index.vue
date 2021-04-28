<template>
	<el-container class="layout-container">
		<el-aside width="200px" class="layout-aside"><Aside /></el-aside>
		<el-container>
			<el-header class="layout-header"><Header /></el-header>
			<el-main class="layout-main"><Tags /></el-main>
			<el-footer class="layout-footer"><Footer /></el-footer>
		</el-container>
	</el-container>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
	components: {
		Header: defineAsyncComponent(() => import('@/layout/home/header/Header.vue')),
		Aside: defineAsyncComponent(() => import('@/layout/home/aside/Aside.vue')),
		// AppMain: defineAsyncComponent(() => import('@/layout/home/main/AppMain.vue')),
		Footer: defineAsyncComponent(() => import('@/layout/commons/Footer.vue')),
		Tags: defineAsyncComponent(() => import('@/layout/home/header/Tags.vue')),
	},
	setup() {},
})
</script>

<style scope lang="scss">
.layout-container {
	width: 100%;
	height: 100%;
	.layout-aside {
		width: 100px;
	}
	.layout-header {
		padding: 5px;
		background-color: rgb(199, 206, 204);
	}
	.layout-main {
		padding: 0;

		width: 100%;

		background-color: #f8f8f8;
	}
}
</style>
