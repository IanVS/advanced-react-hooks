// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

function useCount() {
  const value = React.useContext(CountContext)

  if (!value) {
    throw new Error('useCount must be used inside a CountProvider')
  }

  return value
}

function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  return <CountContext.Provider value={[count, setCount]} {...props} />
}

function CountDisplay() {
  const count = useCount()[0]
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const setCount = useCount()[1]
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/* <CountProvider> */}
      <CountDisplay />
      <Counter />
      {/* </CountProvider> */}
    </div>
  )
}

export default App
