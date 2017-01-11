import React from 'react'

const ExpenseItem = function({ expenseData: data }) {
  console.log("data:", data);
  return (
    <tr>
      <td><b>{ data.description }</b></td>
      <td>£{ -Number(data.gross_value) }</td>
    </tr>
  )
}

export default ExpenseItem
