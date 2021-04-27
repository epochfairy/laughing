import { createI18n } from 'vue-i18n'
import cnLocale from 'element-plus/lib/locale/lang/zh-cn'
import enLocale from 'element-plus/lib/locale/lang/en'
// 登陆
import loginCn from '@/i18n/login/cn'
import loginEn from '@/i18n/login/en'
// 首页/关于
import homeCn from '@/i18n/home/cn'
import homeEn from '@/i18n/home/en'
// 功能
import featureCn from '@/i18n/home/feature/cn'
import featureEn from '@/i18n/home/feature/en'

const messages = {
	cn: {
		el: cnLocale.el,
		message: {
			...loginCn,
			...homeCn,
			...featureCn,
		},
	},
	en: {
		el: enLocale.el,
		message: {
			...loginEn,
			...homeEn,
			...featureEn,
		},
	},
}

const i18n = createI18n({
	locale: 'en',
	globalInjection: true,
	messages,
})

export default i18n
