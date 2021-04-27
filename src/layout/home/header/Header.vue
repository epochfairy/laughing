<template>
	<el-row :gutter="20">
		<el-col :span="20"
			><el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>活动管理</el-breadcrumb-item>
				<el-breadcrumb-item>活动列表</el-breadcrumb-item>
				<el-breadcrumb-item>活动详情</el-breadcrumb-item>
			</el-breadcrumb></el-col
		>
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
