<template>
	<el-container class="layout-container">
		<el-header><Header /></el-header>
		<el-main><Main /></el-main>
		<el-footer><Footer /></el-footer>
	</el-container>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
	components: {
		Header: defineAsyncComponent(() => import('@/layout/login/Header.vue')),
		Main: defineAsyncComponent(() => import('@/layout/login/Main.vue')),
		Footer: defineAsyncComponent(() => import('@/layout/commons/Footer.vue')),
	},
	setup() {},
})
</script>

<style scope lang="scss">
.layout-container {
	width: 100%;
	height: 100%;
	position: fixed;
	background: url('https://scpic.chinaz.net/files/pic/pic9/202103/apic31680.jpg') no-repeat;
	background-size: 100% 100%;
}
</style>
