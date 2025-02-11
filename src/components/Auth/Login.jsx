import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={handleInputChange(setEmail)}
            required
            aria-label="Email"
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={handleInputChange(setPassword)}
            required
            aria-label="Password"
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button
            disabled={!email || !password}
            className={`mt-7 text-white border-none outline-none font-semibold text-lg py-2 px-8 w-full rounded-full 
            ${!email || !password ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'}`}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
