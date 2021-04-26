<template>
	<div class="login-content" :class="{ 'login-content-mobile': tabsActiveName === 'mobile' }">
		<div class="login-content-main">
			<h4 class="login-content-title">{{ $t('message.login.title') }}</h4>
			<el-tabs v-model="tabsActiveName">
				<el-tab-pane :label="$t('message.login.account')" name="account">
					<transition name="el-zoom-in-center">
						<Account v-show="isTabPaneShow" />
					</transition>
				</el-tab-pane>
				<el-tab-pane :label="$t('message.login.mobile')" name="mobile">
					<transition name="el-zoom-in-center">
						<Mobile v-show="isTabPaneShow" />
					</transition>
				</el-tab-pane>
			</el-tabs>

			<div class="mt10">
				<el-button type="text" size="small">{{ $t('message.login.sign_with') }}</el-button>
				<el-button type="text" size="small">{{ $t('message.login.link') }}</el-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'login',
	components: {
		Account: defineAsyncComponent(() => import('@/layout/login/components/Account.vue')),
		Mobile: defineAsyncComponent(() => import('@/layout/login/components/Mobile.vue')),
	},
	setup() {
		const state = reactive({
			tabsActiveName: 'account',
			isTabPaneShow: true,
		})
		return {
			...toRefs(state),
		}
	},
})
</script>

<style scoped lang="scss">
.login-content {
	width: 500px;
	padding: 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) translate3d(0, 0, 0);
	background-color: rgba(255, 255, 255, 0.99);
	box-shadow: 0 2px 12px 0 var(--color-primary-light-5);
	border-radius: 4px;
	transition: height 0.2s linear;
	height: 440px;
	overflow: hidden;
	z-index: 1;
	.login-content-main {
		margin: 0 auto;
		width: 80%;
		.login-content-title {
			color: #333;
			font-weight: 500;
			font-size: 22px;
			text-align: center;
			letter-spacing: 4px;
			margin: 15px 0 30px;
			white-space: nowrap;
		}
	}
}
</style>
