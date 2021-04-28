<template>
	<el-row :gutter="20">
		<el-col :span="20"><BreadCrumb /></el-col>
		<el-col :span="4"
			><div class="info">
				<Language /></div
		></el-col>
	</el-row>
	<el-row :gutter="20">
		<!-- <Tags /> -->
	</el-row>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
	components: {
		BreadCrumb: defineAsyncComponent(() => import('@/layout/home/header/BreadCrumb.vue')),
		Language: defineAsyncComponent(() => import('@/layout/commons/Language.vue')),
		// Tags: defineAsyncComponent(() => import('@/layout/home/header/TabsView.vue')),
	},
	setup() {},
})
</script>
<style scoped lang="scss">
.info {
	text-align: right;
}
</style>
