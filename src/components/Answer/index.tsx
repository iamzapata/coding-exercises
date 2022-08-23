import { Collapsible } from '@components'
import { HEADING_LEVELS, HEADING_STYLES, Heading } from '@components/Heading'

interface AnswerProps {
  children: React.ReactNode
}
export function Answer({ children }: AnswerProps) {
  return (
    <div>
      <Collapsible
        header={
          <Heading
            tag={HEADING_LEVELS.h2}
            textDecorationStyle={HEADING_STYLES.dotted}
            styles={{ margin: 0, lineHeight: 1 }}
          >
            Answer
          </Heading>
        }
      >
        {children}
      </Collapsible>
    </div>
  )
}
