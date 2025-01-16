import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'

describe('WordleBoard', () => {
  it('renders properly', () => {
    const wrapper = mount(WordleBoard, { props: { msg: 'Hello World' } })
    expect(wrapper.text()).toContain('Hello World')
  })
})
