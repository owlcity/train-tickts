import { useState, createContext, useContext } from 'react'

const CounterContext = createContext()

function Child() {
  console.log(useContext(CounterContext))
  const counter = useContext(CounterContext)
  return <h2>{counter}</h2>
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>context</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        button
      </button>
      <h1>{count}</h1>
      <div>
        <CounterContext.Provider value={count}>
          <Child />
        </CounterContext.Provider>
      </div>
    </div>
  )
}
export default App
