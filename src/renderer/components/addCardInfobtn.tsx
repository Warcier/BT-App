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
    await setDoc(doc(db, 'users', 'users-card', 'users-1', 'userCC'), {
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
      <label htmlFor="my-modal-3" className="btn">
        Open modal
      </label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h4>Card Info</h4>
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            x
          </label>
          {/* Form Section */}
          <form onSubmit={onSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Card Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                {...register('cardName')}
              />
              <p className="text-error">
                {errors.cardName && 'Card Name is required'}
              </p>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Card Number</span>
              </label>
              <input
                type="tel"
                placeholder="xxxx xxxx xxxx xxxx"
                className="input input-bordered w-full max-w-xs"
                {...register('cardNumber')}
              />
              <p className="text-error">{errors.cardNumber?.message}</p>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Expiration Date</span>
              </label>
              <input
                type="text"
                placeholder="MM/YYYY"
                className="input input-bordered w-full max-w-xs"
                {...register('expirationDate')}
              />
              <p className="text-error">{errors.expirationDate?.message}</p>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">CVC</span>
              </label>
              <input
                type="text"
                placeholder="123"
                className="input input-bordered w-full max-w-xs"
                {...register('CVC')}
              />
              <p className="text-error">{errors.CVC?.message}</p>
            </div>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCardInfoBtn;
