import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import ImageUpload from './FormPage/ImageUpload';

function Personal() {
  // Used in image gallery part
  const [Model, setModel] = useState(false);

  const getInput = () => {
    setModel(true);
  };

  return (
    <div className=" h-screen bg-blue-500/100">
      <div className={Model ? 'model open' : 'model'}>
        <ImageUpload />
        <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
      </div>

      <div className="text-[42px] font-bold h-24 ">
        <span>Welcome! User.</span>
        <FontAwesomeIcon
          icon={faUser}
          className="h-24 border-black rounded-full hover:opacity-75 float-right"
          onClick={() => getInput()}
        />
      </div>

      <div className="text-[30px] font-semibold bg-blue-500/50">
        <div>Name:</div>
        <div>Age:</div>
        <div>Contact:</div>
        <div>Address:</div>
      </div>
    </div>
  );
}

export default Personal;
