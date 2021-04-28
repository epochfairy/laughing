<template>
	<div class="login-copyright">
		<div class="login-copyright-company">laughing，Made by epochfairy with ❤️</div>
		<div class="login-copyright-msg">Copyright {{ $t('message.login.copyright') }}</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { onBeforeRouteUpdate } from 'vue-router'

export default defineComponent({
	name: 'Footer',
	setup() {},
})
</script>

<style lang="scss">
.login-copyright {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 30px;
	text-align: center;
	color: rgb(228, 17, 17);
	font-size: 14px;
}
</style>
