import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Signing up:', { name, email, password });
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  return (
    <div className="max-w-md mx-auto my-20 p-8 bg-gradient-to-br from-custom-blue to-custom-light-blue rounded-lg shadow-lg text-center transition-transform duration-300 hover:transform hover:translate-y-1">
      <h2 className="text-2xl text-gray-800 font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-400 bg-gray-50"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-400 bg-gray-50"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4 text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-400 bg-gray-50"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-6 text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-400 bg-gray-50"
            placeholder="Confirm your password"
          />
        </div>
        <div className='space-y-3'>
        <Link to="/sign-in" className='w-full py-3 px-4 bg-blue-500 text-white font-bold rounded-lg transition-transform duration-200 hover:bg-blue-600 hover:transform hover:translate-y-0.5'>
        Sign-in
        </Link>
        </div>
       
      </form>
    </div>
  );
}

export default Signup;
