import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../selectors/appSelectors'
import App from './App'

class AppConnector extends Component {

  render() {
    return (
      <App {...this.props}/>
    )
  }
}

export default connect(mapStateToProps)(AppConnector)
