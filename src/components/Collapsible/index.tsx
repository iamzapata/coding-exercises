import styles from './Collapsible.module.scss'
import { classNames } from '@external'
import { useState } from 'react'
import { Minus, Plus } from 'react-feather'

interface CollapsibleProps {
  header: React.ReactNode
  children: React.ReactNode
}

export function Collapsible({ children, header }: CollapsibleProps) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div
      className={classNames(
        styles.Collapsible,
        isCollapsed && styles.isCollapsed
      )}
    >
      <div className={classNames(styles.CollapsibleHeader, 'mb-3')}>
        <button
          className={styles.CollapseButton}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span
            className={classNames(styles.CollapseButtonTextWrapper, 'me-2')}
          >
            <span className={styles.CollapseButtonText}>
              {isCollapsed ? <Plus /> : <Minus />}
            </span>
          </span>

          <span>{header}</span>
        </button>
      </div>
      <span className={styles.CollapseChildren}>{children}</span>
    </div>
  )
}
