
import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Ayush Jain {this.props.age}</h1>
        {this.props.children}
     
        <My2/>
      </div>
    );
  }
}
 class My2 extends Component {
  render() {
    return (
      <div>
        <h1>Rishabh Jain</h1>
        <h1>ssss Jain</h1>
        <h1>def Jain</h1>
        <h1>abc Jain</h1>
      </div>
    )
  }
}

