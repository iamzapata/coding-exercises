import { keyMirror } from '@utils'
import { Property } from 'csstype'
import { CSSProperties } from 'react'

export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type DecorationStylesNames = Property.TextDecorationStyle

export interface HeadingProps {
  tag?: HeadingTags
  textDecorationStyle?: DecorationStylesNames
  styles: CSSProperties
  children: React.ReactNode
}

export type HeadingTypes = {
  [key in HeadingTags]: HeadingTags
}

export const HEADING_LEVELS: HeadingTypes = keyMirror<HeadingTags>([
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
])

export type TextDecorationStyles = {
  [key in DecorationStylesNames]: DecorationStylesNames
}
export const HEADING_STYLES: TextDecorationStyles =
  keyMirror<DecorationStylesNames>([
    'solid',
    'double',
    'dotted',
    'dashed',
    'wavy',
  ])

export function Heading({
  children,
  textDecorationStyle,
  tag = 'h1',
  styles,
}: HeadingProps) {
  const HeadingEl = tag

  const style =
    textDecorationStyle !== undefined
      ? { textDecorationStyle, textDecorationLine: 'underline' }
      : {}

  return <HeadingEl style={{ ...style, ...styles }}>{children}</HeadingEl>
}
