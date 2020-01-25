import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        {" "}
        <button
          className="edit-btn"
          area-label="edit button"
          onClick={() => handleEdit(id)}
        >
          <MdEdit />
        </button>
      </div>
      <div>
        {" "}
        <button
          className="clear-btn"
          area-label="delete button"
          onClick={() => handleDelete(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
