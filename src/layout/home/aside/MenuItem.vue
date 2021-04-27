<template>
	<template v-for="child in route">
		<el-menu-item :key="child.id" :index="child.path" v-if="!child.children">
			<template #title>
				<i class="el-icon-location"></i>
				<span>{{ $t(child.meta.title) }}</span>
			</template>
		</el-menu-item>

		<el-submenu :key="child.id" :index="child.path" v-else>
			<template #title>
				<i class="el-icon-location"></i>
				<span>{{ $t(child.meta.title) }}</span>
			</template>

			<MenuItem :route="child.children"></MenuItem>
		</el-submenu>
	</template>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'MenuItem',
	props: ['route'],
	setup() {},
})
</script>
