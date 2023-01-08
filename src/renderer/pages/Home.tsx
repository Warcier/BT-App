import React from 'react';
import Navbar from 'renderer/components/navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-blue-500">
          Hello Tailwind
          <br />
        </h1>
      </div>
    </div>
  );
};

export default Home;
