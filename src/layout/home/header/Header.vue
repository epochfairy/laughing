<template>
	<el-row :gutter="20">
		<el-col :span="20"><BreadCrumb /></el-col>
		<el-col :span="4"
			><div class="info">
				<Language /></div
		></el-col>
	</el-row>
	<el-row :gutter="20">
		<el-col :span="20">
			<el-tag>标签一</el-tag>
			<el-tag type="success">标签二</el-tag>
			<el-tag type="info">标签三</el-tag>
			<el-tag type="warning">标签四</el-tag>
			<el-tag type="danger">标签五</el-tag>
		</el-col>
		<el-col :span="4"><div>关闭全部</div></el-col>
	</el-row>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
	components: {
		BreadCrumb: defineAsyncComponent(() => import('@/layout/home/header/BreadCrumb.vue')),
		Language: defineAsyncComponent(() => import('@/layout/commons/Language.vue')),
	},
	setup() {},
})
</script>
<style scoped lang="scss">
.info {
	text-align: right;
}
</style>
