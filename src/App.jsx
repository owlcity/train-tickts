import { useEffect, useState } from 'react'
import React, { Component } from 'react'

class App extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }
  onResize = () => {
    this.setState({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    })
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, false)
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize, false)
    document.title = this.state.count
  }
  render() {
    const { count, size } = this.state
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: count + 1
            })
          }}
        >
          按钮
        </button>
        <div>count： {count}</div>
        <div>
          width: {size.width} height:{size.height}
        </div>
      </div>
    )
  }
}

function App2() {
  // const [count, setCount] = useState(0)
  // 延迟初始化，只执行一次
  const [count, setCount] = useState(0)
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }
  useEffect(() => {
    console.log('count', count)
  }, [count])
  useEffect(() => {
    document.title = count
  })
  // componentDidUpdate, componentDidMount
  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    // return 在组件卸载或组件重新渲染时执行
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>按钮</button>
      <div>count： {count}</div>
      <div>
        width: {size.width} height:{size.height}
      </div>
    </div>
  )
}
export default App2
