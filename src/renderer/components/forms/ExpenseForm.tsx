import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { doc, setDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi/dist/joi';
import Joi from 'joi';
import { DayPicker } from 'react-day-picker';
import { db } from '../../firebase';
import 'react-day-picker/dist/style.css';

interface IFormInputs {
  expense: string;
  amount: number;
  expenseType: string;
  date: string;
}
const schema = Joi.object({
  expense: Joi.string().required(),
  amount: Joi.number().required(),
  expenseType: Joi.required(),
  date: Joi.date(),
});
const ExpenseForm = () => {
  const [selected, setSelected] = useState<Date>();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });

  // Handle Submit Action for the form
  const onSubmit = handleSubmit(async (data) => {
    await setDoc(doc(db, 'users', 'expenditure', 'transaction', `spend-1`), {
      expenseInfo: {
        expense: data.expense,
        amount: data.amount,
        expenseType: data.expenseType,
        date: format(selected, 'P'),
        timestamp: new Date(),
      },
    });
    console.log('send');
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        expense: '',
        amount: '',
        expenseType: '',
        date: '',
      });
    }
  }, [formState, reset]);

  return (
    <>
      <h4>Expense Form</h4>
      <form onSubmit={onSubmit}>
        <div>
          <div className="flex flex-col gap-2">
            <div className="">
              <div className="form-control" />
              <label className="input-group">
                <span>Expense</span>
                <input
                  type="text"
                  wr
                  className="input input-bordered"
                  {...register('expense')}
                />
              </label>
              {errors.expense ? (
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
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                />
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
