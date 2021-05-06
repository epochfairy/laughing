import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from '@/routers'
// import { store, key } from '@/store'
import i18n from '@/i18n'
import worker from '@/mocks'
import 'element-plus/lib/theme-chalk/index.css'

import App from '@/App.vue'

if (import.meta.env.DEV) {
	worker.start()
}

const app = createApp(App)

app.use(i18n)
// app.use(store, key)
app.use(router)

app.use(ElementPlus, { i18n: i18n.global.t })
app.mount('#app')
