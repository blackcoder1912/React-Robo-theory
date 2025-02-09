import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    console.log('Signing in:', { email, password });

    setEmail('');
    setPassword('');
    setError('');
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  return (
    <div className="w-80 mx-auto my-20 p-6 bg-gradient-to-br from-custom-blue to-custom-light-blue rounded-lg shadow-lg text-center font-sans transition-transform duration-300 hover:transform hover:translate-y-1">
      <h2 className="text-gray-800 text-2xl mb-6 font-semibold">Sign In</h2>
      <form onSubmit={handleSignIn}>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <div className="mb-4 text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-400 bg-gray-50"
          />
        </div>
        <div className="mb-6 text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-400 bg-gray-50"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg transition-transform duration-200 hover:bg-blue-600 hover:transform hover:translate-y-0.5"
        >
          Sign In
        </button>
      </form>
      <p className="text-gray-600 mt-4 text-sm">
        Not a member?{' '}
        <Link to="/" className="text-blue-500 hover:underline">
          Signup
        </Link>
      </p>
    </div>
  );
}

export default Signin;
