import { HEADING_LEVELS, HEADING_STYLES, Heading } from './Heading'
import { render } from '@testing-library/react'

describe('<Heading />', () => {
  it('renders a level 1 heading by default', () => {
    render(<Heading>Hello World</Heading>)
    const heading = document.querySelector('h1')
    expect(heading?.nodeName).toBe('H1')
  })

  it('does not add a text decoration by default', () => {
    render(<Heading>Hello World</Heading>)
    const heading = document.querySelector('h1')
    expect(heading).toBeInTheDocument()
    expect(heading?.style.textDecorationStyle).toBe('')
  })

  Object.entries(HEADING_LEVELS).forEach(([_, level]) => {
    it(`renders a ${level} heading`, () => {
      render(<Heading tag={level}>Hello World</Heading>)
      const heading = document.querySelector(level)
      expect(heading).toBeInTheDocument()
      expect(heading?.nodeName.toLocaleLowerCase()).toBe(level)
    })
  })

  Object.entries(HEADING_STYLES).forEach(([_, style]) => {
    it(`sets the correct textDecorationStyle for ${style}`, () => {
      render(<Heading textDecorationStyle={style}>Hello World</Heading>)
      const heading = document.querySelector('h1')
      expect(heading?.style.textDecorationStyle).toBe(style)
    })
  })
})
