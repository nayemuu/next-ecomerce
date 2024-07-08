'use client';

import Error from '@/components/reuseable/Error/Error';
import { useEffect, useState } from 'react';
import InputForText from '../../Inputs/InputForText/InputForText';

function LogInForm({ setClose, setSelectedFrom }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

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
          className="absolute top-[-30px] right-[-30px] cursor-pointer"
          onClick={() => setClose(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect
              x="0.75"
              y="0.75"
              width="30.5"
              height="30.5"
              rx="4.25"
              stroke={isHovered ? '#e10000' : '#DCE0E4'}
              strokeWidth="1.5"
            />
            <path
              d="M25 25L7 7M25 7L7 25"
              stroke={isHovered ? '#e10000' : '#DCE0E4'}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="bg-white p-5 shadow rounded-lg">
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <InputForText
                inputType="text"
                label="Email"
                value={email}
                setValue={setEmail}
                mandatory={true}
              />
            </div>

            {/* <div className="mt-4">
              <PasswordInputField
                value={password}
                setValue={setPassword}
                lebel={`Password`}
              />
            </div> */}

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

          <div
            className="mt-4 font-bold ml-1 cursor-pointer text-center"
            onClick={() => setSelectedFrom('ForgetPassword')}
          >
            Forget Password
          </div>

          <div className="mt-4 flex justify-center">
            Don't have an account?
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
