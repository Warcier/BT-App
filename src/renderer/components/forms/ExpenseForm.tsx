import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi/dist/joi';
import Joi from 'joi';
import DatePicker from 'react-datepicker';
import { db } from '../../firebase';

interface IFormInputs {
  Expense: string;
  amount: number;
  expenseType: string;
  date: Date;
}
const schema = Joi.object({
  cardName: Joi.string().required(),
  cardNumber: Joi.string().creditCard().required(),
  expirationDate: Joi.string().required(),
  CVC: Joi.number().required(),
});
const ExpenseForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });

  // Handle Submit Action for the form
  const onSubmit = handleSubmit(async (data) => {});

  return (
    <>
      <h4>Expense Form</h4>
      <form onSubmit={onSubmit}>
        <div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="form-control" />
              <label className="input-group">
                <span>Expense</span>
                <input
                  type="text"
                  placeholder="Card Name"
                  className="input input-bordered"
                  {...register('Expense')}
                />
              </label>
              {errors.Expense ? (
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
                  <span>Amount</span>
                  <input
                    type="tel"
                    placeholder="xxxx xxxx xxxx xxxx"
                    className="input input-bordered w-full max-w-xs"
                    {...register('amount')}
                  />
                </label>
                {errors.amount ? (
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
                  <span>Type</span>
                  <select {...register('expenseType')}>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="clothes">Clothes</option>
                  </select>
                </label>
                {errors.expenseType ? (
                  <div>
                    <div className="alert alert-error shadow-lg">
                      <div>
                        <span> Date is required</span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="input-group">
                  <span>Date</span>
                </label>
                {errors.date ? (
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
        <div className="pt-3">
          <button type="submit" className="btn">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
