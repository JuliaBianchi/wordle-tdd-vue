import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { VICTORY_MESSAGE } from '@/settings'

describe('WordleBoard', () => {
  test('victory message', async () => {
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay: 'TESTS' }})
    const guessInput = wrapper.find("input[type=text]")
    await guessInput.setValue('TESTS')
    await guessInput.trigger("keydown.enter")

    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  
  })
})
