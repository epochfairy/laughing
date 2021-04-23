import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { ViteEnv } from './src/utils/env'
// https://vitejs.dev/config/
export default ({ mode }) => {
	Object.assign(process.env, loadEnv(mode, process.cwd()))
	return defineConfig({
		plugins: [vue()],
		base: process.env.VITE_PUBLIC_PATH, // 对应GitHub项目名称
		server: {
			port: parseInt(process.env.VITE_PORT, 10),
			open: false,
		},
	})
}
