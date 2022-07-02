import { Component, PureComponent } from 'react';

class ClassComponents extends Component {
  state = {
    name: '张三'
  }

  componentDidMount() {
    setInterval(() => {
      this.updateName();
    }, 1000)
  }

  updateName = () => {
    this.setState({
      name: '张三'
    })
  }

  render() {
    return (
<>
      <ReguarComponentDemo {...this.state} />
      <PureComponentDemo {...this.state} />
    </>
    )
    
  }
}

class ReguarComponentDemo extends Component {
  render() {
    console.log('Component==');

    return <div>{this.props.name}</div>
  }
}

class PureComponentDemo extends PureComponent {
  render() {
    console.log('PureComponent==');

    return <div>{this.props.name}</div>
  }
}

export default ClassComponents;