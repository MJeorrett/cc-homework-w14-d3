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

    const customer = { "contact":
      {
        "first_name":"test",
        "last_name":"me",
        "organisation_name":"Acme Ltd",
        "email":"test@example.com",
        "billing_email":"billing@example.com",
        "phone_number":"12345678",
        "mobile":"9876543210",
        "address1":"11 George Street",
        "address2": "Kings Court",
        "address3": "Flat 6",
        "town":"London",
        "region": "Southwark",
        "postcode":"SE1 6HA",
        "country":"United Kingdom",
        "contact_name_on_invoices":true,
        "locale":"en",
        "account_balance":"-100.0",
        "uses_contact_invoice_sequence":false,
        "charge_sales_tax":"Auto",
        "sales_tax_registration_number":"ST12345",
        "active_projects_count":0,
        "status":"Active"
      }
    }

    XmlHttpHelper.postWithAuthorizationToken(
      this._getUrl( "contacts" ),
      this.state.token,
      customer
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
