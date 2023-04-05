import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi, { number } from 'joi';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
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
          <span className="text-2xl font-light ">Add Balance</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left bg-blue-500">
            <div className="h-2 bg-purple-400 rounded-t-md" />
            <form onSubmit={onSubmit}>
              <div className="px-8 py-6 ">
                <label className="block font-semibold"> Balance </label>
                <input
                  type="text"
                  placeholder="Number"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('addbalance')}
                />
                {errors.addbalance && <p>You must enter a number</p>}
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

export default BalanceForm;
