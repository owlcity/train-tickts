import { useState, createContext } from 'react'
const BetteryContext = createContext() // 括号中为默认值
const OnlineContext = createContext()

function Leaf() {
  return (
    <BetteryContext.Consumer>
      {(count) => (
        <OnlineContext.Consumer>
          {(online) => (
            <h1>
              count:{count}
              online: {String(online)}
            </h1>
          )}
        </OnlineContext.Consumer>
      )}
    </BetteryContext.Consumer>
  )
}

function Middle() {
  return <Leaf />
}
function App() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(60)
  const [online, setOnline] = useState(false)
  return (
    <BetteryContext.Provider value={count}>
      <OnlineContext.Provider value={online}>
        <div className="App">
          <button onClick={() => setCount(count + 1)}>Click count</button>
          <button onClick={() => setOnline(!online)}>Click online</button>
          <Middle />
        </div>
      </OnlineContext.Provider>
    </BetteryContext.Provider>
  )
}

export default App
