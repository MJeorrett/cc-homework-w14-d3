import React from 'react'

import XmlHttpHelper from '../helpers/XmlHttpHelper'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      repos: [],
      baseUrl: 'https://api.sandbox.freeagent.com/v2/',
      token: "1mnnp7BmgRFQcpliSQRR_yQ_2l0_jh02_SlOixFgu"
    }
  }

  componentDidMount() {
    XmlHttpHelper.getWithAuthorizationToken(
      this._getUrl( "company" ),
      this.state.token,
      ( reposObj ) => {
        console.log( "reposObj:", reposObj )
      }
    )
  }

  render() {
    return (
      <h1>FreeAgent App</h1>
    )
  }

  _getUrl( route ) {
    return this.state.baseUrl + route
  }

}

export default Main
