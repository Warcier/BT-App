import React from 'react';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import db from '../firebase';

const TestFirebase = () => {

  async function handleSubmit() {
    const citiesRef = collection(db, 'cities');

    await setDoc(doc(citiesRef, 'SF'), {
      name: 'San Francisco',
      state: 'CA',
      country: 'USA',
      capital: false,
      population: 860000,
      regions: ['west_coast', 'norcal'],
    });
    await setDoc(doc(citiesRef, 'LA'), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      capital: false,
      population: 3900000,
      regions: ['west_coast', 'socal'],
    });
    await setDoc(doc(citiesRef, 'DC'), {
      name: 'Washington, D.C.',
      state: null,
      country: 'USA',
      capital: true,
      population: 680000,
      regions: ['east_coast'],
    });
    await setDoc(doc(citiesRef, 'TOK'), {
      name: 'Tokyo',
      state: null,
      country: 'Japan',
      capital: true,
      population: 9000000,
      regions: ['kanto', 'honshu'],
    });
    await setDoc(doc(citiesRef, 'BJ'), {
      name: 'Beijing',
      state: null,
      country: 'China',
      capital: true,
      population: 21500000,
      regions: ['jingjinji', 'hebei'],
    });

    const docRef = doc(db, 'budget', 'user-1');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      const obj = docSnap.data().toString();
      console.log(obj);
      console.log(docSnap.data().second);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleSubmit}
        className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
      >
        <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
        <span className="relative text-black group-hover:text-white">
          Send Data and Print!
        </span>
      </button>
    </div>
  );
};
export default TestFirebase;
