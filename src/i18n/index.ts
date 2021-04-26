import { createI18n } from 'vue-i18n'
import cnLocale from 'element-plus/lib/locale/lang/zh-cn'
import enLocale from 'element-plus/lib/locale/lang/en'
import loginCn from '@/i18n/login/cn'
import loginEn from '@/i18n/login/en'
import homeCn from '@/i18n/home/cn'
import homeEn from '@/i18n/home/en'

const messages = {
	cn: {
		el: cnLocale.el,
		message: {
			...loginCn,
			...homeCn,
		},
	},
	en: {
		el: enLocale.el,
		message: {
			...loginEn,
			...homeEn,
		},
	},
}

const i18n = createI18n({
	locale: 'en',
	globalInjection: true,
	messages,
})

export default i18n
