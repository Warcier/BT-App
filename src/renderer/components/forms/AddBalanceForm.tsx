import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi, { number } from 'joi';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

interface IFormInputs {
  balance: number;
}

const schema = Joi.object({
  balance: Joi.number().required(),
});

const BudgetForm = ({ balance }) => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [addCurrentBalance, setAddCurrentBalance] = useState(0);

  setCurrentBalance(balance);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });

  async function setBalance(addedBalance) {
    const mutationBalance = currentBalance + addCurrentBalance;
    await setDoc(doc(db, 'users', 'personal', 'balance', `setBalance`), {
      current_balance: mutationBalance,
    });
  }


  const onSubmit = handleSubmit(async (data) => {
    await setAddCurrentBalance(data.balance);
    await setBalance(addCurrentBalance);
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">{currentBalance}{addCurrentBalance}</span>
          </label>
          <label className="input-group">
            <span>Add Balance</span>
            <input
              type="text"
              placeholder="Balance"
              className="input input-bordered"
              {...register('balance')}
            />
          </label>
          {errors.balance ? (
            <div>
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>Balance is required</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="pt-4 item-center">
          <button type="submit" className="btn btn-secondary py-30 ">
            Set Budget
          </button>
        </div>
      </form>
    </div>
  );
}

export default BudgetForm;
