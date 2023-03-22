import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

interface IFormInputs {
  budget_amount: string;
}

const schema = Joi.object({
  budget_amount: Joi.number().required(),
});
const BudgetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    await setDoc(doc(db, 'users', 'personal', 'budget', `setBudget`), {
      budget_amount: data.budget_amount,
    });
    alert('Data Sent');
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Budget</span>
          </label>
          <label className="input-group">
            <span>Amount</span>
            <input
              type="text"
              placeholder="10"
              className="input input-bordered"
              {...register('budget_amount')}
            />
          </label>
          {errors.budget_amount ? (
            <div>
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>Card Name is required</span>
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
