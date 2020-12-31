import { Component, useState, createContext } from 'react'
const BetteryContext = createContext() // 括号中为默认值

class Leaf extends Component {
  static contextType = BetteryContext
  render() {
    const count = this.context
    return <h1>count:{count}</h1>
  }
}

function Middle() {
  return <Leaf />
}
function App() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(60)
  return (
    <BetteryContext.Provider value={count}>
      <div className="App">
        <button onClick={() => setCount(count + 1)}>Click count</button>
        <Middle />
      </div>
    </BetteryContext.Provider>
  )
}

export default App
