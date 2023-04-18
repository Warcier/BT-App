import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { doc, setDoc, runTransaction } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi/dist/joi';
import Joi from 'joi';
import { DayPicker } from 'react-day-picker';
import { v4 as uuid } from 'uuid';
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

  async function deductBalance(value: number) {
    const balanceDocRef = doc(db, '/users/personal/balance/setBalance');

    try {
      const newBalance = await runTransaction(db, async (transaction) => {
        const balanceDoc = await transaction.get(balanceDocRef);

        const newBal = balanceDoc.data().current_balance - value;
        if (newBal > 0) {
          transaction.update(balanceDocRef, { current_balance: newBal });
          return 'Deducted';
        }
        transaction.update(balanceDocRef, { current_balance: 0 });
      });

      console.log('Deducted Balance', newBalance);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }
  }

  // Handle Submit Action for the form
  const onSubmit = handleSubmit(async (data) => {
    await setDoc(
      doc(db, 'users', 'expenditure', 'transaction', `cc${uuid()}`),
      {
        expenseInfo: {
          expense: data.expense,
          amount: data.amount,
          expenseType: data.expenseType,
          date: format(selected, 'P'),
          timestamp: new Date(),
        },
      }
    );
    await deductBalance(data.amount);
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
      <div className="relative flex min-h-screen text-gray-800 flex-col justify-center overflow-hidden py-6 ">
        <div className="relative py-3 mx-auto text-center">
          <div className="mt-4 bg-white shadow-md rounded-lg text-left bg-blue-500">
            <div className="h-2 bg-purple-400 rounded-t-md" />
            <form onSubmit={onSubmit}>
              <div className="px-8 py-6 ">
                <label className="block font-semibold"> Expense </label>
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('expense')}
                />
                {errors.expense && <p>You must enter a expense</p>}
                <label className="block font-semibold"> Amount </label>
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('amount')}
                />
                {errors.amount && <p>You must enter a amount</p>}
                <label className="block font-semibold">Type</label>
                <select
                  className="border w-full h-10 px-3  mt-2 text-gray-800 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('expenseType')}
                >
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Other">Other</option>
                </select>
                {errors.expenseType && <p>Choose either one of the option</p>}
                <label className="block font-semibold">Date</label>
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                />
                <div className="flex justify-between items-baseline">
                  <button
                    type="submit"
                    className=" btn btn-secondary mt-4 py-2 px-6 text-gray-800 "
                  >
                    Add Expense
                  </button>
                  <button
                    onClick={() =>
                      reset({
                        expense: '',
                        amount: '',
                        expenseType: 'Food',
                      })
                    }
                    className=" btn btn-secondary mt-4 py-2 px-6 text-gray-800 "
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseForm;
