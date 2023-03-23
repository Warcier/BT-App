import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { doc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import { db } from '../../firebase';
import 'react-toastify/dist/ReactToastify.css';

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
  });

  const sent = toast.success('New Budget Set', {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  return (
    <>
      <div className="relative flex min-h-screen text-gray-800 flex-col justify-center overflow-hidden py-6 ">
        <div className="relative py-3 mx-auto text-center">
          <span className="text-2xl font-light ">Set Your Budget</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left bg-blue-500">
            <div className="h-2 bg-purple-400 rounded-t-md" />
            <form onSubmit={onSubmit}>
              <div className="px-8 py-6 ">
                <label className="block font-semibold"> Budget </label>
                <input
                  type="text"
                  placeholder="Number"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('budget_amount')}
                />
                {errors.budget_amount && <p>You must enter a number</p>}
                <div className="flex justify-between items-baseline">
                  <button
                    type="submit"
                    onClick={() => sent}
                    className=" btn btn-secondary mt-4 py-2 px-6 text-gray-800 "
                  >
                    Set
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetForm;
