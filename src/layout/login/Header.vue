<template>
	<el-row :gutter="20">
		<el-col :span="4"
			><div class="login-logo">
				<Logo /></div
		></el-col>
		<el-col :span="16"><div></div></el-col>
		<el-col :span="4"
			><div>
				<Language /></div
		></el-col>
	</el-row>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
	components: {
		Logo: defineAsyncComponent(() => import('@/layout/commons/Logo.vue')),
		Language: defineAsyncComponent(() => import('@/layout/commons/Language.vue')),
	},
	setup() {},
})
</script>
<style scoped lang="scss"></style>
