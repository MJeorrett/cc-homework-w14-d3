import React from 'react'

import XmlHttpHelper from '../helpers/XmlHttpHelper'

const FreeAgentButton = function({ price, description, imageUrl }) {

  var url = 'https://api.sandbox.freeagent.com/v2/expenses'
  var token = '1mnnp7BmgRFQcpliSQRR_yQ_2l0_jh02_SlOixFgu'

  const handleClick = function() {
    var payload = {
      expense: {
        description: description[0],
        category: "https://api.sandbox.freeagent.com/v2/categories/271",
        currency: "GBP",
        dated_on: "2017-02-14",
        gross_value: (-price).toString(),
        user: "https://api.sandbox.freeagent.com/v2/users/1560"
      }
    }
    XmlHttpHelper.postWithAuthorizationToken(
      url,
      token,
      payload
    )
  }

  return (
    <button
      className="freeagent-button"
      onClick={ handleClick }
    ></button>
  )
}

export default FreeAgentButton
