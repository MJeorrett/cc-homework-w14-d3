import React from 'react';

import XmlHttpHelper from '../helpers/XmlHttpHelper'
import ExpenseItem from '../components/ExpenseItem'

class FreeAgentContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      apiBaseUrl: 'https://api.sandbox.freeagent.com/v2/',
      token: "1f7DR4XDIDB6GyDBkgjaxI6WhXs_fCenSBApzybJC",
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
    var expensesData = this.state.data

    if ( expensesData.length > 0 ) {
      var output = expensesData.map( ( expenseData, index ) => {
        return (
          <ExpenseItem
            key={ index }
            expenseData={ expenseData }
          />
        )
      })
      return (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            { output }
          </tbody>
        </table>
      )
    } else {
      return <p id="loading-message">Loading...</p>
    }
  }

}

export default FreeAgentContainer
