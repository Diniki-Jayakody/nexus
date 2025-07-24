import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/home');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 w-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input type="text" placeholder="Name" className="w-full mb-4 px-4 py-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 border rounded" />
        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white text-black py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
