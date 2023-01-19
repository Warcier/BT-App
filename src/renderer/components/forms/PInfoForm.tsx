import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase';

interface IFormInputs {
  fullName: string;
  age: string;
  phoneNumber: number;
  address: string;
  budget: number;
}

const schema = Joi.object({
  fullName: Joi.string().required(),
  age: Joi.number().required(),
  phoneNumber: Joi.number().required(),
  address: Joi.string().required(),
  budget: Joi.number().required(),
});
function PInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    // Add a new document in collection "cities"
    // TODO: Automatically assign a unique id to the document
    await setDoc(doc(db, 'users', 'personal', 'user', `wt${uuidv4()}`), {
      fullName: data.fullName,
      age: data.age,
      phoneNumber: data.phoneNumber,
      address: data.address,
      budget: data.budget,
    });

    // #TODO temporary indicator for data submission
    // alert('data added');

    // const getCardData = () => {
    //  //ReadData
    //    const data = {
    //      fullName: 'Susan',
    //      age: 34,
    //      phoneNumber: 87654321,
    //      address: 'TungChung',
    //      budget: 9000,
    //    }
    // };
  });

  return (
    <div className="container ">
      {/* Form Section */}

      <form onSubmit={onSubmit}>
        <div className="flex flex-col justify-center items-center">
          <h1>
            <b>Card Info</b>
          </h1>
          {/* Input item starts */}
          <div className="form-control" />
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered input-accent w-full max-w-xs"
            {...register('fullName')}
          />
          {errors.fullName ? (
            <div>
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>Card Name is required</span>
                </div>
              </div>
            </div>
          ) : null}
          {/* Input item ends */}
          {/* Input item starts */}
          <div className="form-control" />
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered input-accent w-full max-w-xs"
            {...register('age')}
          />
          {errors.age ? (
            <div>
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>Age is required</span>
                </div>
              </div>
            </div>
          ) : null}

          {/* Input item ends */}
          {/* Input item starts */}
          <div className="form-control" />
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered input-accent w-full max-w-xs"
            {...register('phoneNumber')}
          />
          {errors.phoneNumber ? (
            <div>
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>Expiration Date is required</span>
                </div>
              </div>
            </div>
          ) : null}
          {/* Input item ends */}
          {/* Input item starts */}
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered input-accent w-full max-w-xs"
            {...register('address')}
          />
          {errors.address ? (
            <div>
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>Address is required</span>
                </div>
              </div>
            </div>
          ) : null}
          {/* Input item ends */}
          <div className="pt-4">
            <button
              type="submit"
              className="btn btn-outline btn-secondary py-30 "
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PInfoForm;
