import React from 'react';
import BalanceForm from '../forms/BalanceForm';

const SetBalanceModal = () => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn">
        Add Balance
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* Modal Body Starts */}
          <BalanceForm />
          {/* Modal Body End */}
        </label>
      </label>
    </>
  );
}

export default SetBalanceModal;
