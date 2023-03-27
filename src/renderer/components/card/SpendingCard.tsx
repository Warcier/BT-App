import React, { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, where, query } from 'firebase/firestore';
import { db } from '../../firebase';

function SpendingCard(props) {
  return (
    <div className="stats text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow shadow-xl w-[24.4rem] height-fixed hover:shadow-lg">
      <div className="stat">
        <div className=" text-xl pb-1">Spending Limits</div>
        <progress
          className="progress progress-accent w-[20rem]"
          value={props.total}
          max={props.budget}
        />
        <span>
          ${props.total} out of ${props.budget}
        </span>
      </div>
    </div>
  );
}

export default SpendingCard;
