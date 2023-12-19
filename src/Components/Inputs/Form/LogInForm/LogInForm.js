'use client';

import Error from '@/Components/Error/Error';
import React, { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import PasswordInputField from '../PasswordInputField/PasswordInputField';

function LogInForm({ setClose, setSelectedFrom }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('email = ', email);
    console.log('password = ', password);

    //resetForm();
    setFormValidation('');
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="mt-8 mx-[35px] sm:mx-auto sm:w-full max-w-sm relative">
        <div
          className="absolute top-[-30px] right-[-30px] text-xl hover:text-red-500 cursor-pointer border-2 border-solid border-[#DCE0E4] hover:border-red-300 p-1 rounded-md"
          onClick={() => setClose(false)}
        >
          <TfiClose />
        </div>

        <div className="bg-white p-5 shadow rounded-lg">
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-4">
              <PasswordInputField
                value={password}
                setValue={setPassword}
                lebel={`Password`}
              />
            </div>

            <div className="mt-4">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/80 transition duration-150 ease-in-out"
                >
                  Log In
                </button>
              </span>
            </div>
            {error && <Error message={error} />}
          </form>
          <div className="mt-4 flex justify-center">
            Already have an account?{' '}
            <span
              className="font-bold ml-1 cursor-pointer"
              onClick={() => setSelectedFrom('SignUpForm')}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInForm;
