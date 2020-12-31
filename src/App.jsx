import { useState, useMemo, useCallback } from 'react'

function Child(props) {
  console.log('child')
  return <h2 onClick={props.onClick}>{props.count}</h2>
}
function App() {
  const [count, setCount] = useState(0)
  const [clickCount, setClickCount] = useState(0)
  const double = useMemo(() => {
    return count * 2
  }, [count === 3])
  const onClick = useCallback(() => {
    console.log('click')
    setClickCount((clickCount) => clickCount + 1)
  })
  return (
    <div>
      <div>context</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        button click({count}) double:{double}
      </button>
      <h1>{count}</h1>
      <div>
        <Child count={clickCount} onClick={onClick} />
      </div>
    </div>
  )
}
export default App
