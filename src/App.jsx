import { Component, lazy, Suspense } from 'react'

const About = lazy(() => import(/*webpackChunkName:"about"*/ './About'))
class App extends Component {
  state = {
    hasError: false
  }
  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }
  // componentDidCatch() {
  //   this.setState({
  //     hasError: true
  //   })
  // }
  render() {
    if (this.state.hasError) {
      return <div>error</div>
    }
    return (
      <Suspense fallback={<div>loading</div>}>
        <div>
          <About></About>
        </div>
      </Suspense>
    )
  }
}

export default App
