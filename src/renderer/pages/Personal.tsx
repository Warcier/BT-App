import React from 'react';
import PersonalCard from '../components/card/PersonalCard';
import CardDetailTable from '../components/table/CardDetailTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import ImageUpload from './FormPage/ImageUpload';

function Personal() {
  return (
    <div className=" h-screen bg-blue-500/100 p-3">
      <div className={Model ? 'model open' : 'model'}>
        <ImageUpload />
        <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
      </div>

      <div className="text-[42px] font-bold h-24 p-3">
        <span>Welcome! User.</span>
        <FontAwesomeIcon icon={faUser} className="h-24 border-black rounded-full hover:opacity-75 float-right" onClick={() => getInput()} />
      </div>

      <div className="text-[30px] font-semibold bg-blue-500/50 p-3">
        <div>
          Name:
        </div>
        <div>
          Age:
        </div>
        <div>
          Contact:
        </div>
        <div>
          Address:
        </div>
        <div>
          <PersonalCard />
          <div className=" m-5 flex items-center justify-center bg-white space-x-2">
            <h1 className="text-blue-500">
              <h1 className="text-center font-bold text-4xl my-3">Credit Card</h1>
              <CardDetailTable />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
