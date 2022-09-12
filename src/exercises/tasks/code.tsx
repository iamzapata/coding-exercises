async function init() {
  const API_BASE = 'https://dog.ceo/api/breeds/image/random'
  async function fetchJsonAsync(url, id) {
    console.log('%ccalling fetchJsonAsync...', 'color: green', `(${id})`)
    try {
      const request = await fetch(url, {
        cache: 'force-cache',
      })
      const text = await request.text()
      return JSON.parse(text)
    } catch (error) {
      console.error(error)
    }
  }

  function fetchJsonViaPromises(url, id) {
    console.log(
      '%ccalling fetchJsonViaPromises...',
      'color: goldenrod',
      `(${id})`
    )
    return fetch(url, {
      cache: 'force-cache',
    })
      .then((request) => request.text())
      .then((text) => JSON.parse(text))
      .catch((error) => {
        console.error(error)
      })
  }

  const START = 'SYNC START'.padStart(20, '-').padEnd(30, '-')
  console.log(`%c${START}`, 'font-size: 14px')

  console.log('%cqueue task', 'color:blue')
  setTimeout(() =>
    console.log('%csetTimeout 1', 'color: cyan;background-color:black')
  )

  console.log('%cqueue microtask', 'color:red')
  queueMicrotask(() =>
    console.log('%cmicro 1', 'color:snow;background-color:red')
  )

  fetchJsonViaPromises(API_BASE, 'using .then').then((promiseResult) =>
    console.dir('then -> fetchJsonViaPromises')
  )

  console.log('%cqueue task', 'color:blue')
  setTimeout(() =>
    console.log('%csetTimeout 2', 'color: cyan;background-color:black')
  )

  fetchJsonAsync(API_BASE, 'using .then').then((asyncResult) => {
    console.dir('then -> fetchJsonAsync')
  })

  console.log('%cqueue microtask', 'color:red')
  queueMicrotask(() =>
    console.log('%cmicro 2', 'color:snow;background-color:red')
  )

  console.log('%cqueue microtask', 'color:red')
  queueMicrotask(() =>
    console.log('%cmicro 3', 'color:snow;background-color:red')
  )

  const asyncResult = fetchJsonAsync(API_BASE)
  console.log('%cafter asyncResult', 'color:brown')

  const promiseResult = fetchJsonViaPromises(API_BASE)
  console.log('%cafter promiseResult', 'color:brown')

  Promise.all([asyncResult, promiseResult]).then(() => {
    console.log('%cqueue task', 'color:blue')
    setTimeout(() =>
      console.log('%csetTimeout 3', 'color: cyan;background-color:black')
    )
    console.log('%cPromise.all', 'color: hotpink')
  })

  console.log('%cqueue microtask', 'color:red')
  queueMicrotask(() =>
    console.log('%cmicro 4', 'color:snow;background-color:red')
  )

  await fetchJsonAsync(API_BASE, 'using await')
  console.log('%cafter await fetchJsonAsync', 'color:brown')

  await fetchJsonViaPromises(API_BASE, 'using await')
  console.log('%cafter await fetchJsonViaPromises', 'color:brown')

  const END = 'END'.padStart(15, '-').padEnd(30, '-')
  console.log(`%c${END}`, 'font-size: 14px')
}
export function InitCode() {
  return <button onClick={() => init()}>Run</button>
}
