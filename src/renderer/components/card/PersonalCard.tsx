import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import ImageUpload from '../ImageUpload';

function PersonalCard() {
  // Used in image gallery part
  const [Model, setModel] = useState(false);

  const getInput = () => {
    setModel(true);
  };

  return (
    <>
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-10">
        <div className="flex justify-center mt-16">
          <div className={Model ? 'model open' : 'model'}>
            <ImageUpload />
            <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
          </div>
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">Profile</h2>
          <FontAwesomeIcon
            icon={faUser}
            className="h-24 border-black rounded-full hover:opacity-75 float-right"
            onClick={() => getInput()}
          />
          <div className="text-lg">
            <div>Name:</div>
            <div>Age:</div>
            <div>Contact:</div>
            <div>Address:</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalCard;
