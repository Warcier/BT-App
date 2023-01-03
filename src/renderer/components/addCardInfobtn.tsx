import React from 'react';

const addCardInfobtn = () => {
  return (
    <div>
      <button type="submit" className="btn">
        Button
      </button>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        Add Card Info
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form>
            <div className="form-control w-full max-w-xs">
              {/* eslint-disable-next-line */}
          <label className="label">
                <span className="label-text">Card Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Card Number</span>
              </label>
              <input
                type="tel"
                placeholder="xxxx xxxx xxxx xxxx"
                className="input input-bordered w-full max-w-xs"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                autoComplete="cc-number"
                maxLength={9}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Expiration Date</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">CVC</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                Send
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default addCardInfobtn;
