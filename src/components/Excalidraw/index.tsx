import styles from './Excalidraw.module.scss'
import { Excalidraw as ED } from '@excalidraw/excalidraw'
import { ExcalidrawInitialDataState } from '@excalidraw/excalidraw/types/types'

interface ExcalidrawProps {
  name: string
  data: ExcalidrawInitialDataState
}
export function Excalidraw({ data, name }: ExcalidrawProps) {
  return (
    <div
      className={styles.ExcalidrawWrapper}
      onWheelCapture={(e) => {
        // Stop Excalidraw from hijacking scroll
        e.stopPropagation()
      }}
    >
      <ED initialData={data} theme="light" name={name} />
    </div>
  )
}
