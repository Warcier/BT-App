import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

/*
#TODO
  ## add dynamic way to increment the amount of card added to the database
  ## add a indicator if data is added to the database or not (alert?)
*/
interface IFormInputs {
  cardName: string;
  cardNumber: string;
  expirationDate: string;
  CVC: number;
}
const schema = Joi.object({
  cardName: Joi.string().required(),
  cardNumber: Joi.string().creditCard().required(),
  expirationDate: Joi.string().required(),
  CVC: Joi.number().required(),
});

const AddCardInfoBtn = () => {
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });
  // Handle Submit Action for the form
  const onSubmit = handleSubmit(async (data) => {
    // Add a new document in collection "cities"
    // TODO: Automatically assign a unique id to the document
    await setDoc(doc(db, 'users', 'users-card-7'), {
      CardName: data.cardName,
      CardNumber: data.cardNumber,
      CVC: data.CVC,
      ExpirationDate: data.expirationDate,
    });

    // #TODO temporary indicator for data submission
    alert('data added');
  });

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
          <h4>Card Info</h4>
          <form onSubmit={onSubmit}>
            <div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="form-control" />
                  <label className="input-group">
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder="Card Name"
                      className="input input-bordered"
                      {...register('cardName')}
                    />
                  </label>
                  {errors.cardName ? (
                    <div>
                      <div className="alert alert-error shadow-lg">
                        <div>
                          <span>Card Name is required</span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  <div className="form-control">
                    <label className="input-group">
                      <span>Card Number</span>
                      <input
                        type="tel"
                        placeholder="xxxx xxxx xxxx xxxx"
                        className="input input-bordered w-full max-w-xs"
                        {...register('cardNumber')}
                      />
                    </label>
                    {errors.cardNumber ? (
                      <div>
                        <div className="alert alert-error shadow-lg">
                          <div>
                            <span>Card Number is required</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label className="input-group">
                      <span>Expiration Date</span>
                      <input
                        type="text"
                        placeholder="MM/YYYY"
                        className="input input-bordered w-full max-w-xs"
                        {...register('expirationDate')}
                      />
                    </label>
                    {errors.expirationDate ? (
                      <div>
                        <div className="alert alert-error shadow-lg">
                          <div>
                            <span>Expiration Date is required</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label className="input-group">
                      <span>CVC</span>
                      <input
                        type="text"
                        placeholder="123"
                        className="input input-bordered w-full max-w-xs"
                        {...register('CVC')}
                      />
                    </label>
                    {errors.CVC ? (
                      <div>
                        <div className="alert alert-error shadow-lg">
                          <div>
                            <span>CVC is required</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="btn">
                Send
              </button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};

export default AddCardInfoBtn;
