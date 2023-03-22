import React from 'react';
import ExpenseForm from '../forms/ExpenseForm';

function ExpenseModal() {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn">
        Add Expense
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-error" htmlFor="my-modal-4">
          {/* Modal Body Starts */}
          <ExpenseForm />
          {/* Modal Body End */}
        </label>
      </label>
    </>
  );
}

export default ExpenseModal;
