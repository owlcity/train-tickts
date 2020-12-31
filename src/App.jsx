import { PureComponent, memo, Component } from 'react'

// function Child() {
//   console.log('child')
//   return <div>child</div>
// }

// class Child extends PureComponent {
//   constructor(props) {
//     super(props)
//     console.log(props)
//   }
//   render() {
//     console.log('child')
//     const { person } = this.props
//     return <div>{person.age}</div>
//   }
// }
const Child = memo(function Child(props) {
  return <div>{props.person.age}</div>
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      person: {
        age: 1
      }
    }
  }
  // const callBack = () => {}
  render() {
    // const [count, setCount] = useState(0)
    const { person } = this.state
    return (
      <div>
        <button
          onClick={() => {
            person.age++
            this.setState({ count: this.state.count + 1 })
          }}
        >
          {this.state.count}
        </button>
        <Child person={person}></Child>
        {/* cb={() => {callBack()}} */}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div>
//       <button onClick={() => setCount(0)}>{count}</button>
//       <Child></Child>
//     </div>
//   )
// }
export default App
