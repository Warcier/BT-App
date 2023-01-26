import React from 'react';
import AddCardForm from '../forms/AddCardForm';

function CCardModal() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="CC-modal" className="btn">
        Add Card
      </label>
      {/* Modal Body */}
      <input type="checkbox" id="CC-modal" className="modal-toggle" />
      <label htmlFor="CC-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* Form Section */}
          <AddCardForm />
        </label>
      </label>
    </div>
  );
}

export default CCardModal;
