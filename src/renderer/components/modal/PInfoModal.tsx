import React from 'react';
import PInfoForm from '../forms/PInfoForm';

function PInfoModal() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="PInfoModal-1" className="btn">
        Update Information
      </label>
      {/* Modal Toggle */}
      <input type="checkbox" id="PInfoModal-1" className="modal-toggle" />
      <label htmlFor="PInfoModal-1" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* Modal Body Start */}
          <PInfoForm />
          {/* Modal Body End */}
        </label>
      </label>
    </div>
  );
}

export default PInfoModal;
