import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 5
      }
    }
    increment(){
        this.setState({
            count : this.state.count+2
        })
    }
  render() {
    const {count} = this.state 
    return (
      <div>
        <h1> {count}</h1>
        <button onClick={()=> this.increment()}>Click</button>
      </div>
    )
  }
}

export default ClassCounter
