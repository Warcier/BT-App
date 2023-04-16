import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { doc, setDoc } from 'firebase/firestore';
import { ToastContainer } from 'react-toastify';
import { db } from '../../firebase';

interface IFormInputs {
  fullName: string;
  age: string;
  phoneNumber: string;
  address: string;
}

const schema = Joi.object({
  fullName: Joi.string().required(),
  age: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  address: Joi.string().required(),
});
function PInfoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    await setDoc(doc(db, 'users', 'personal', 'user', 'userDetails'), {
      fullName: data.fullName,
      age: data.age,
      phoneNumber: data.phoneNumber,
      address: data.address,
    });
  });

  return (
    <>
      <div className="relative flex min-h-screen text-gray-800 flex-col justify-center overflow-hidden py-6 ">
        <div className="relative py-3 mx-auto text-center">
          <span className="text-2xl font-light ">Personal Info</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left bg-blue-500">
            <div className="h-2 bg-purple-400 rounded-t-md" />
            <form onSubmit={onSubmit}>
              <div className="px-8 py-6 ">
                <label className="block font-semibold"> Full Name </label>
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('fullName')}
                />
                {errors.fullName && <p>You must enter a number</p>}
                <label className="block font-semibold"> Age </label>
                <input
                  type="number"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('age')}
                />
                {errors.age && <p>You must enter a number</p>}
                <label className="block font-semibold"> Phone Number </label>
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('phoneNumber')}
                />
                {errors.phoneNumber && <p>You must enter a valid Number</p>}
                <label className="block font-semibold"> Address </label>
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('address')}
                />
                {errors.address && <p>You must enter an address </p>}
                <div className="flex justify-between items-baseline">
                  <button
                    type="submit"
                    className=" btn btn-secondary mt-4 py-2 px-6 text-gray-800 "
                  >
                    Update
                  </button>
                  <button
                    onClick={() =>
                      reset({
                        fullName: '',
                        age: 0,
                        phoneNumber: 0,
                        address: '',
                      })
                    }
                    className=" btn btn-secondary mt-4 py-2 px-6 text-gray-800 "
                  >
                    Reset
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
}

export default PInfoForm;
