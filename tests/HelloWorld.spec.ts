import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

test('HelloWorld.vue', async () => {
	const wrapper = mount(HelloWorld)
	expect(wrapper.html()).toContain('Recommended IDE setup')
	expect(wrapper.html()).toContain('count is: 0')
	await wrapper.find('button').trigger('click')
	expect(wrapper.html()).toContain('count is: -1')
})
