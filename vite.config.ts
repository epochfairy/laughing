import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default ({ mode }) => {
	Object.assign(process.env, loadEnv(mode, process.cwd()))
	return defineConfig({
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		plugins: [vue()],
		base: process.env.VITE_PUBLIC_PATH, // 对应GitHub项目名称
		server: {
			port: parseInt(process.env.VITE_PORT, 10),
			open: false,
			// proxy: {
			// 	'/': {
			// 		target: 'http://127.0.0.1',
			// 		changeOrigin: true,
			// 		// rewrite: path.replace(/^\/api/, ''),
			// 	},
			// },
		},
	})
}
