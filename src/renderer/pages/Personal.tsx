import React, { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PersonalCard from '../components/card/PersonalCard';
import CardDetailTable from '../components/table/CardDetailTable';
import ImageUpload from '../components/ImageUpload';

function Personal() {
  // Used in image gallery part
  const [Model, setModel] = useState(false);

  const getInput = () => {
    setModel(true);
  };

  return (
    <div className=" bg-blue-500/100 h-screen ">
      <div className={Model ? 'model open' : 'model'}>
        <ImageUpload />
        <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
      </div>

      <div className="text-[30px] font-semibold bg-blue-500/50 p-3 ">
        <div>
          <PersonalCard />
          <div className=" m-5 flex items-center justify-center bg-white space-x-2 ">
            <h1 className="text-blue-500">
              <h1 className="text-center font-bold text-4xl my-3">
                Credit Card
              </h1>
              <CardDetailTable />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
