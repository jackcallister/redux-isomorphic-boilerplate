import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <main className='container'>
        <h1>{this.props.data}</h1>
      </main>
    )
  }
}
