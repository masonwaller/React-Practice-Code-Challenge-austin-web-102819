import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       sushi: [],
       currentSushi: [],
       dollars: 100,
       eated: []
    }
  }

  removeSushi = (price) => {
    let prev = this.state.eated
    this.setState({
      dollars: this.state.dollars - price,
      eated: prev.concat(price)
    })
  }


  getSushi = () => {
    const res = this.state.sushi.splice(0, 4)
    this.setState({
      currentSushi: res
    })
  }

  componentDidMount() {
    fetch(API).then(res => res.json()).then(res => this.setState({
      sushi: res
    }, () => {
      const res = this.state.sushi.splice(0, 4)
      this.setState({
        currentSushi: res
      })}))
  }

  
  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.currentSushi} getSushi={this.getSushi} removeSushi={this.removeSushi} dollars={this.state.dollars}/>
        <Table dollars={this.state.dollars} eated={this.state.eated}/>
      </div>
    );
  }
}

export default App;