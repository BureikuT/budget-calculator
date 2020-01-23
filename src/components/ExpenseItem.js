import React from 'react'

export const ExpenseItem = ({expense}) => {
    const{id,charge,amount} = expense

    return (
        <li className='item'>
        <div className='info'>
            <span className='expense'>{charge}</span>
            <span></span>
        </div>
        </li>
    )
}


export default ExpenseItem