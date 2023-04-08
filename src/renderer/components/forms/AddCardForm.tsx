import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi/dist/joi';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import Joi from 'joi';
import { toast, ToastContainer } from 'react-toastify';
import { db } from '../../firebase';

/*
#TODO
  ## add dynamic way to increment the amount of card added to the database
  ## add a indicator if data is added to the database or not (alert?)
*/

interface IFormInputs {
  cardID: string;
  cardName: string;
  cardNumber: string;
  expirationDate: string;
  CVC: string;
  type: string;
}
const schema = Joi.object({
  cardID: Joi.string().required(),
  cardName: Joi.string().required(),
  cardNumber: Joi.string().creditCard().required(),
  expirationDate: Joi.string().required(),
  CVC: Joi.string().required(),
  type: Joi.string().required(),
});

function AddCardForm() {
  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });
  // Handle Submit Action for the form
  const onSubmit = handleSubmit(async (data) => {
    // Add a new document in collection "cities"
    // TODO: Automatically assign a unique id to the document
    await setDoc(doc(db, 'users', 'wallet', 'userCard', `cc${uuidv4()}`), {
      cardInfo: {
        CardID: data.cardID,
        CardName: data.cardName,
        CardNumber: data.cardNumber,
        CVC: data.CVC,
        ExpirationDate: data.expirationDate,
        Type: data.type,
        Main: 'No',
      },
    });

    // #TODO temporary indicator for data submission
    console.log('data sent');
  });

  const sent = toast.success('Card Added', {
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
          <span className="text-2xl font-light ">Card Info</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left bg-blue-500">
            <div className="h-2 bg-purple-400 rounded-t-md" />
            <form onSubmit={onSubmit}>
              <div className="px-8 py-6 ">
                <label className="block font-semibold"> ID </label>
                <input
                  type="text"
                  placeholder="ID"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('cardID')}
                />
                {errors.cardName && <p>You must enter a number</p>}
                <label className="block font-semibold"> Full Name </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('cardName')}
                />
                {errors.cardName && <p>You must enter a full name</p>}
                <label className="block font-semibold"> Card Number </label>
                <input
                  type="text"
                  placeholder="#### #### #### ####"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('cardNumber')}
                />
                {errors.cardNumber && <p>You must enter a valid Card Number</p>}
                <label className="block font-semibold"> Expiration Date </label>
                <input
                  type="text"
                  placeholder="00/00"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('expirationDate')}
                />
                {errors.CVC && <p>You must enter a valid Expiration Date</p>}
                <label className="block font-semibold"> CVC </label>
                <input
                  type="text"
                  placeholder="123"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('CVC')}
                />
                {errors.expirationDate && <p>You must enter a valid CVC </p>}
                <label className="block font-semibold">Type</label>
                <select
                  className="border w-full h-10 px-3  mt-2 text-gray-800 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('type')}
                >
                  <option value="master">Master</option>
                  <option value="visa">Visa</option>
                  <option value="other">Other</option>
                </select>
                {errors.type && <p>Choose either one of the option</p>}
                <div className="flex justify-between items-baseline">
                  <button
                    type="submit"
                    onClick={() => sent}
                    className=" btn btn-secondary mt-4 py-2 px-6 text-gray-800 "
                  >
                    Add Card
                  </button>
                  <button
                    onClick={() =>
                      reset({
                        cardID: '',
                        cardName: '',
                        cardNumber: '',
                        expirationDate: '',
                        CVC: '',
                        type: 'master',
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

export default AddCardForm;
