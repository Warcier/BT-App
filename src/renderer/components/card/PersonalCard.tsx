import { useState, useEffect, useRef, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { doc, onSnapshot } from 'firebase/firestore';
import ImageUpload from '../ImageUpload';
import { db } from '../../firebase';
import PInfoModal from '../modal/PInfoModal';
import { CCardModal } from '../TestingComponents';

function PersonalCard() {
  // Used in image gallery part
  const [Model, setModel] = useState(false);
  const [name, setName] = useState(false);
  const [age, setAge] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(false);
  const [address, setAddress] = useState(false);
  const docRef = doc(db, '/users/personal/user/userDetails');

  const getInput = () => {
    setModel(true);
  };

  useEffect(() => {
    const unsub = onSnapshot(docRef, (doc) => {
      setName(doc.get('fullName'));
      setAge(doc.get('age'));
      setPhoneNumber(doc.get('phoneNumber'));
      setAddress(doc.get('address'));
    });
  }, []);

  return (
    <>
      <div className="max-w-screen py-4 px-8 bg-white shadow-lg rounded-lg my-3 mx-11">
        <div className="flex justify-center mt-5">
          <div className={Model ? 'model open' : 'model'}>
            <ImageUpload />
            <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">Profile</h2>
            <FontAwesomeIcon
              icon={faUser}
              className="h-24 border-black rounded-full hover:opacity-75 float-right"
              onClick={() => getInput()}
            />
          </div>
          <div>
            <div className="text-lg ">
              <p>
                <b>Name:</b> {name}
              </p>
              <p>
                <b>Age:</b> {age}
              </p>
              <p>
                <b>Contact:</b> {phoneNumber}
              </p>
              <p>
                <b>Address:</b> {address}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <PInfoModal />
                </div>
                <div>
                  <CCardModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalCard;
