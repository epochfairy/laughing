<template>
	<form>
		<select v-model="locale">
			<option value="en">{{ $t('message.language.english') }}</option>
			<option value="cn">{{ $t('message.language.chinese') }}</option>
		</select>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
	name: 'Language',

	setup() {
		const { locale } = useI18n()

		return {
			locale,
		}
	},
})
</script>

<style scoped lang="scss"></style>
