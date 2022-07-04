import React,{ Component } from "react"

export class App extends React.Component {
  render() {
    throw new Error("lalala")
    return <div>App works</div>
  }
}

export default class ErrorBoundaries extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(error) {
    console.log("componentDidCatch")
  }
  static getDerivedStateFromError() {
    console.log("getDerivedStateFromError")
    return {
      hasError: true
    }
  }
  render() {
    if (this.state.hasError) {
      return <div>发生了错误</div>
    }
    return <App />
  }
}