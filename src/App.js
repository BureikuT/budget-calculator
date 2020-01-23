import React from 'react'
import ExpenseList from './components/ExpenseList'
import ExpenseItem from './components/ExpenseItem'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
export const App = () => {
  return <>
  <Alert></Alert>
 < ExpenseForm/>
 <ExpenseList/>
  )
  </>
}

export default App