import React from 'react';

import XmlHttpHelper from '../helpers/XmlHttpHelper'
import ExpenseItem from '../components/ExpenseItem'

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
      ( expensesObj ) => {
        this.setState({
          data: expensesObj.expenses
        })
      }
    )
  }

  render() {

    var output = <p>"Loading..."</p>
    var expensesData = this.state.data

    if ( expensesData.length > 0 ) {
      output = expensesData.map( ( expenseData, index ) => {
        return (
          <ExpenseItem
            key={ index }
            expenseData={ expenseData }
          />
        )
      })
    }

    return (
      <div>
        { output }
      </div>
    )
  }

}

export default FreeAgentContainer
