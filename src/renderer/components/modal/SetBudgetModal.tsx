import React from 'react';
import BudgetForm from '../forms/BudgetForm';

function SetBudgetModal() {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn">
        Set Budget
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* Modal Body Starts */}
          <BudgetForm />
          {/* Modal Body End */}
        </label>
      </label>
    </>
  );
}

export default SetBudgetModal;
