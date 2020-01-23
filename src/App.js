import React, {useState} from 'react'
import ExpenseList from './components/ExpenseList'
import ExpenseItem from './components/ExpenseItem'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import uuid from 'uuid/v4'

const initialExpenses = [
  {id:uuid(), charge: "rent", amount: 1000},
  {id:uuid(), charge: "car payment", amount: 2000},
  {id:uuid(), charge: "credit card", amount: 3000}
]

console.log(initialExpenses)


const App = () => {
  return <>
  <Alert/>
 < ExpenseForm/>
 <ExpenseList/>
  
  </>
}

export default App