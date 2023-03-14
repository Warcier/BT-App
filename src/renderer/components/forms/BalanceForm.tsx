import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi, { number } from 'joi';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

interface IFormInputs {
  addbalance: number;
}

const schema = Joi.object({
  addbalance: Joi.number().required(),
});

const BalanceForm = () => {
  const [currentBalance, setCurrentBalance] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });

  async function newBalance(addingBalance: number) {
    const mutationBalance = currentBalance + addingBalance;
    await setDoc(doc(db, 'users', 'personal', 'balance', `setBalance`), {
      current_balance: mutationBalance,
    });
  }

  async function getCurrentBalance() {
    const snapshot = onSnapshot(
      doc(db, 'users', 'personal', 'balance', 'setBalance'),
      { includeMetadataChanges: true },
      (data) => {
        setCurrentBalance(data.get('current_balance'));
      }
    );
  }

  const onSubmit = handleSubmit(async (data) => {
    await newBalance(data.addbalance);
  });

  useEffect(() => {
    getCurrentBalance().catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className="input-group">
            <span>Add Balance</span>
            <input
              type="text"
              placeholder="Balance"
              className="input input-bordered"
              {...register('addbalance')}
            />
          </label>
          {errors.addbalance ? (
            <div>
              <div className="alert alert-error shadow-lg bg-blue-400 text-white ">
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
};

export default BalanceForm;
