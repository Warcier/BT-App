import React from 'react';
import { Link } from 'react-router-dom';
import AddCardInfoBtn from 'renderer/components/addCardInfobtn';
import GetCardDetail from '../components/getCardDetail';

const FamilySpend = () => {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-blue-500">Family Expenditure</h1>
        <Link to="/" className="btn">
          Home
        </Link>
        <div>
          <AddCardInfoBtn />
        </div>
        <div>
          <GetCardDetail />
        </div>
      </div>
    </div>
  );
};

export default FamilySpend;
