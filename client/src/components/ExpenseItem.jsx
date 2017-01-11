import React from 'react'

const ExpenseItem = function({ expenseData: data }) {
  console.log("data:", data);
  return (
    <div>
      <h3>{ data.description }</h3>
      <p>{ `Cost: £${-Number(data.gross_value)}` }</p>
    </div>
  )
}

export default ExpenseItem
