import React from 'react';
import "../index.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-200 w-screen">
      <div className="p-8 rounded-lg w-full max-w-md flex flex-row gap-4 float-right">
        <button className="text-white py-3 px-5 rounded font-bold">Input</button>
        <button
          onClick={() => navigate('/result')}
          className="text-white py-3 px-5 rounded font-bold"
        >
          Result
        </button>
        <button
          onClick={() => navigate('/login')}
          className="text-white py-2 px-4rounded font-bold border-1"
        >
          Logout
        </button>
      </div>
      <div>
      {/* result content */}
        
      </div>
    </div>
  );
};

export default Home;
