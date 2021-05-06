// src/mocks/browser.js
import { setupWorker } from 'msw'
import login from '@/mocks/login'
// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...login)
export default worker
