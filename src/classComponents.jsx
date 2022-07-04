import { Component, PureComponent } from 'react';

class ClassComponents extends Component {
  state = {
    name: '张三',
    other: {
      age: 18,
      job: 'waiter'
    }
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.updateName();
    // }, 2000)
  }

  updateName = () => {
    this.setState({
      name: '张三',
    })
  }

  changeJob = () => {
    const { other: { job } } = this.state;
    this.setState({
      ...this.state,
      job: 'chef'
    })
  }

  render() {
    return (
      <>
        <ReguarComponentDemo {...this.state} />
        <PureComponentDemo {...this.state} />
        <button onClick={this.changeJob}>change job</button>
      </>
    )

  }
}

class ReguarComponentDemo extends Component {
  shouldComponentUpdate(nextProps, nextState){
    // console.log('PureComponent==', nextProps, nextState);
    if (nextProps.name !== this.props.name) {
      return true
    }
    return false
  }

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