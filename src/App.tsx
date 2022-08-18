import './App.css'
import '@code-hike/mdx/dist/index.css'

import { DefaultLayout } from '@components'
import { Heading } from '@components/Heading'
import { ClosureOne } from '@exercises'

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <article>
          <Heading>Coding Exercises:</Heading>
          <section>
            <ClosureOne />
          </section>
        </article>
      </DefaultLayout>
    </div>
  )
}

export default App
