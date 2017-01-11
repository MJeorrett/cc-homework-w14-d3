import React from 'react'

import XmlHttpHelper from '../helpers/XmlHttpHelper'

const FreeAgentButton = function({ price, description }) {

  var url = 'https://api.sandbox.freeagent.com/v2/expenses'
  var token = '1mnnp7BmgRFQcpliSQRR_yQ_2l0_jh02_SlOixFgu'

  const handleClick = function() {
    var expense = {
      price: price,
      description: description
    }
    // XmlHttpHelper.postWithAuthorizationToken(
    //   url,
    //   token,
    //   {
    //
    //   }
    // )
    console.log( "creating expense:", expense );
  }

  return (
    <button
      className="freeagent-button"
      onClick={ handleClick }
    ></button>
  )
}

export default FreeAgentButton
