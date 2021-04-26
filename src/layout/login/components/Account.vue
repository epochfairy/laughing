<template>
	<el-form class="login-content-form">
		<el-form-item>
			<el-input
				type="text"
				:placeholder="$t('message.account.username')"
				prefix-icon="el-icon-user"
				v-model="ruleForm.username"
				clearable
				autocomplete="off"
			>
			</el-input>
		</el-form-item>
		<el-form-item>
			<el-input
				type="password"
				:placeholder="$t('message.account.password')"
				prefix-icon="el-icon-lock"
				v-model="ruleForm.password"
				autocomplete="off"
				show-password
			>
			</el-input>
		</el-form-item>
		<el-form-item>
			<el-row :gutter="15">
				<el-col :span="16">
					<el-input
						type="text"
						maxlength="4"
						:placeholder="$t('message.account.code')"
						prefix-icon="el-icon-position"
						v-model="ruleForm.code"
						clearable
						autocomplete="off"
					></el-input>
				</el-col>
				<el-col :span="8">
					<div class="login-content-code">
						<span class="login-content-code-img">1314</span>
					</div>
				</el-col>
			</el-row>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" class="login-content-submit" round :loading="loading.signIn">
				<span>{{ $t('message.login.button') }}</span>
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'login',
	setup() {
		const state = reactive({
			ruleForm: {
				username: 'admin',
				password: '123456',
				code: '1234',
			},
			loading: {
				signIn: false,
			},
		})

		return {
			...toRefs(state),
		}
	},
})
</script>

<style scoped lang="scss">
.login-content-form {
	margin-top: 20px;
	.login-content-code {
		display: flex;
		align-items: center;
		justify-content: space-around;
		.login-content-code-img {
			width: 100%;
			height: 40px;
			line-height: 40px;
			background-color: #ffffff;
			border: 1px solid rgb(220, 223, 230);
			color: #333;
			font-size: 16px;
			font-weight: 700;
			letter-spacing: 5px;
			text-indent: 5px;
			text-align: center;
			cursor: pointer;
			transition: all ease 0.2s;
			border-radius: 4px;
			user-select: none;
			&:hover {
				border-color: #c0c4cc;
				transition: all ease 0.2s;
			}
		}
	}
	.login-content-submit {
		width: 100%;
		letter-spacing: 2px;
		font-weight: 300;
		margin-top: 15px;
	}
}
</style>
