import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import {
  collection,
  doc,
  getDocs,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../../firebase';
import 'react-toastify/dist/ReactToastify.css';

interface IFormInputs {
  card_ID: string;
}

const schema = Joi.object({
  card_ID: Joi.string().required(),
});

const MainCard = () => {
  const [oldID, setOldID] = useState<any>('');
  const [newDocID, setNewDocID] = useState<any>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });

  async function swapMainCard(Old: string, NewID: string, Database: any) {
    // Update the OlD Main Card Main:Attr = "No"
    const batch = writeBatch(Database);

    const cardRef1 = await doc(db, `/users/wallet/userCard/${String(Old)}`);
    const cardRef2 = await doc(db, `/users/wallet/userCard/${String(NewID)}`);
    batch.update(cardRef1, {
      'cardInfo.Main': 'No',
    });

    // Update the New Main Card Main:Attr = "Yes"

    batch.update(cardRef2, {
      'cardInfo.Main': 'Yes',
    });
    await batch.commit();

    console.log('Updated');
  }

  const onSubmit = handleSubmit(async (data) => {
    const cardInfoRef = collection(db, '/users/wallet/userCard');

    const oldQ = query(cardInfoRef, where('cardInfo.Main', '==', 'Yes'));
    const querySnapshot1 = await getDocs(oldQ);
    querySnapshot1.forEach((oldData) => {
      setOldID(oldData.id);
    });

    const newQ = query(
      cardInfoRef,
      where('cardInfo.CardID', '==', `${data.card_ID}`)
    );
    const querySnapshot2 = await getDocs(newQ);
    querySnapshot2.forEach((newData) => {
      setNewDocID(newData.id);
    });

    await swapMainCard(oldID, newDocID, db);
  });

  return (
    <>
      <div className="relative flex min-h-screen text-gray-800 flex-col justify-center overflow-hidden py-6 ">
        <div className="relative py-3 mx-auto text-center">
          <span className="text-2xl font-light ">New Main Card</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left bg-blue-500">
            <div className="h-2 bg-purple-400 rounded-t-md" />
            <form onSubmit={onSubmit}>
              <div className="px-8 py-6 ">
                <label className="block font-semibold"> Main Card </label>
                <input
                  type="text"
                  placeholder="text"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                  {...register('card_ID')}
                />
                {errors.card_ID && (
                  <p>You must enter a a unique ID card number</p>
                )}
                <div className="flex justify-between items-baseline">
                  <button
                    type="submit"
                    className=" btn btn-secondary mt-4 py-2 px-6 text-gray-800 "
                  >
                    Set
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

export default MainCard;
