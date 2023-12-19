'use client';

import Error from '@/Components/Error/Error';
import React, { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import PasswordInputField from '../PasswordInputField/PasswordInputField';

function SignUpForm({ setClose, setSelectedFrom }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formValidation, setFormValidation] = useState('');
  const [error, setError] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setFormValidation('password did not match');
    }

    console.log('name = ', name);
    console.log('email = ', email);
    console.log('password = ', password);
    console.log('confirmPassword = ', confirmPassword);

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
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  name="name"
                  placeholder="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
              </div>
            </div>

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
              <PasswordInputField
                value={confirmPassword}
                setValue={setConfirmPassword}
                lebel={`Confirm Password`}
              />
            </div>

            <div className="mt-4">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black/80 transition duration-150 ease-in-out"
                >
                  Sign Up
                </button>
              </span>
            </div>
            {formValidation && <Error message={formValidation} />}
            {error && <Error message={error} />}
          </form>
          <div className="mt-4 flex justify-center">
            Already have an account?{' '}
            <span
              className="font-bold ml-1 cursor-pointer"
              onClick={() => setSelectedFrom('LogInForm')}
            >
              Sign in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
