import React from 'react';

import XmlHttpHelper from '../helpers/XmlHttpHelper'

class FreeAgentContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      apiBaseUrl: 'https://api.sandbox.freeagent.com/v2/',
      token: "1mnnp7BmgRFQcpliSQRR_yQ_2l0_jh02_SlOixFgu",
      data: {}
    }
  }

  componentDidMount() {
    XmlHttpHelper.getWithAuthorizationToken(
      this.state.apiBaseUrl + "expenses",
      this.state.token,
      ( companyObj ) => {
        this.setState({
          data: companyObj
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1>FreeAgent Container</h1>
        { JSON.stringify( this.state.data ) }
      </div>
    )
  }

}

export default FreeAgentContainer
