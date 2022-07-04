import React, { Component } from "react"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      employee: {
        name: "张三",
        age: 20
      }
    }
  }
  render() {
    const { name, age } = this.state.employee
    return (
      <div>
        {name}
        {age}
        <button
          onClick={() =>
            this.setState({
              ...this.state,
              employee: {
                ...this.state.employee, // 避免数据结构突变
                age: 30
              }
            })
          }
        >
          change age
        </button>
      </div>
    )
  }
}