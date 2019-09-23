import { shallowMount } from '@vue/test-utils'
import Gif from '@/components/Gif'

describe('Gif.vue', () => {
  it('renders <figure> with passed id attribute', () => {
    const src = 'https://media.giphy.com/media/RYdlpCWVnRg6A/giphy.gif'
    const id = 'RYdlpCWVnRg6A'
    const wrapper = shallowMount(Gif, {
      propsData: { id, src }
    })

    expect(wrapper.contains('figure')).toBe(true)

    let figure = wrapper.find('figure')
    expect(figure.attributes('id')).toBe(id)
  })

  it('renders <img> inside <figure> with passed src attribute', () => {
    const src = 'https://media.giphy.com/media/RYdlpCWVnRg6A/giphy.gif'
    const id = 'RYdlpCWVnRg6A'
    const wrapper = shallowMount(Gif, {
      propsData: { id, src }
    })

    expect(wrapper.contains('figure > img')).toBe(true)

    let img = wrapper.find('figure > img')
    expect(img.attributes('src')).toBe(src)
  })
})
