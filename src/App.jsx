import { useState } from 'react'
function App(props) {
  // const [count, setCount] = useState(0)
  // 延迟初始化，只执行一次
  const [count, setCount] = useState(() => {
    console.log('init count')
    return props.defaultCount || 0
  })
  const [name, setName] = useState('zhang')

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>按钮</button>
      <div>count： {count}</div>
      <div>name： {name}</div>
    </div>
  )
}
export default App
