import React from 'react'

import XmlHttpHelper from '../helpers/XmlHttpHelper'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    XmlHttpHelper.get( "https://api.sandbox.freeagent.com/v2/company", "1mnnp7BmgRFQcpliSQRR_yQ_2l0_jh02_SlOixFgu", ( reposObj ) => {
      console.log( "reposObj:", reposObj )
    })
  }

  render() {
    return (
      <h1>FreeAgent App</h1>
    )
  }

}

export default Main
