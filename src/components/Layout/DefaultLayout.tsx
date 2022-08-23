import styles from './DefaultLayout.module.scss'
import { classNames } from '@external'

interface DefaultLayoutProps {
  children: React.ReactNode
}
export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={classNames('GridThree', styles.DefaultLayout,'p-4')}>
      {children}
    </div>
  )
}
