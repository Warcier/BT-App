import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase';
import { collection, getDoc} from 'firebase/firestore';
import fs from 'fs';

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

const Personal = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });


  const onSubmit = handleSubmit(async (data) =>{
    // Add a new document in collection "cities"
    // TODO: Automatically assign a unique id to the document
    //await setDoc(doc(db, 'users', 'personal', 'user', `wt${uuidv4()}`), {
    //  fullName: data.fullName,
    //  age: data.age,
    //  phoneNumber: data.phoneNumber,
    //  address: data.address,
    //  budget: data.budget,
    //});
//
    //// #TODO temporary indicator for data submission
    //alert('data added');



    const getCardData = () => {
      //ReadData
        const data = {
          fullName: 'Susan',
          age: 34,
          phoneNumber: 87654321,
          address: 'TungChung',
          budget: 9000,
        }
    };

    getCardData();
  });


  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <div className="contrainer">
          {/* Form Section */}
          <h4>Card Info</h4>
          <form onSubmit={onSubmit}>
            <div>
              <div className="flex flex-col gap-2">
                <div>
                  {/* Input item starts */}
                  <div className="form-control" />
                  <label className="input-group">
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      {...register('fullName')}
                    />
                  </label>
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
                </div>
                <div>
                  {/* Input item starts */}
                  <div className="form-control">
                    <label className="input-group">
                      <span>Age</span>
                      <input
                        type="tel"
                        placeholder=""
                        className="input input-bordered w-full max-w-xs"
                        {...register('age')}
                      />
                    </label>
                    {errors.age ? (
                      <div>
                        <div className="alert alert-error shadow-lg">
                          <div>
                            <span>Age is required</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  {/* Input item ends */}
                </div>
                <div>
                  {/* Input item starts */}
                  <div className="form-control">
                    <label className="input-group">
                      <span>Phone Number</span>
                      <input
                        type="text"
                        placeholder=""
                        className="input input-bordered w-full max-w-xs"
                        {...register('phoneNumber')}
                      />
                    </label>
                    {errors.phoneNumber ? (
                      <div>
                        <div className="alert alert-error shadow-lg">
                          <div>
                            <span>Expiration Date is required</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  {/* Input item ends */}
                </div>
                <div>
                  {/* Input item starts */}
                  <div className="form-control">
                    <label className="input-group">
                      <span>Address</span>
                      <input
                        type="text"
                        placeholder=""
                        className="input input-bordered w-full max-w-xs"
                        {...register('address')}
                      />
                    </label>
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
                  </div>
                </div>
                <div>
                  {/* Input item starts */}
                  <div className="form-control">
                    <label className="input-group">
                      <span>Budget</span>
                      <input
                        type="text"
                        placeholder=""
                        className="input input-bordered w-full max-w-xs"
                        {...register('budget')}
                      />
                    </label>
                    {errors.budget ? (
                      <div>
                        <div className="alert alert-error shadow-lg">
                          <div>
                            <span>Budget is required</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {/* Input item ends */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Personal
