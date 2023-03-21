import React from 'react';

/*
 * #TODO Database not implemented
 *   -one card needs to main and use query to get the main card and show the data here using snapshot
 */

function CCard() {
  return (
    <>
      <div className="space-y-16">
        <div className="w-96 h-56 m-auto bg-red-100 relative text-white ">
          <div className="relative rounded-xl object-cover w-full h-full bg-gradient-to-r from-blue-700 to-green-400 hover:shadow-lg " />
          <div className="w-full px-8 absolute top-4">
            <div className="flex justify-between">
              <div className="">
                <h1 className="font-light">Name</h1>
                <p className="font-medium tracking-widest">Gurung Susan</p>
              </div>
              <img
                className="w-14 h-14"
                src="https://i.imgur.com/bbPHJVe.png"
                alt="*"
              />
            </div>
            <div className="pt-1">
              <h1 className="font-light">Card Number</h1>
              <p className="font-medium tracking-more-wider">
                4556 5682 4192 8296
              </p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="font-light text-xs">Valid</h1>className
                  <p className="font-medium tracking-wider text-sm">11/15</p>
                </div>
                <div className="">
                  <h1 className="font-light text-xs text-xs">Expiry</h1>
                  <p className="font-medium tracking-wider text-sm">09/2024</p>
                </div>

                <div className="">
                  <h1 className="font-light text-xs">CVV</h1>
                  <p className="font-bold tracking-more-wider text-sm">125</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CCard;
