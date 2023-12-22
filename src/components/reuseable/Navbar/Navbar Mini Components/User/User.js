'use client';
import { FaUser } from 'react-icons/fa';

import './User.css';
import Dropdown from './Dropdown/Dropdown';
import { useEffect, useRef, useState } from 'react';
import LogInForm from '@/components/reuseable/Inputs/Form/LogInForm/LogInForm';
import SignUpForm from '@/components/reuseable/Inputs/Form/SignUpForm/SignUpForm';
import ModalRightToLeft from '@/components/reuseable/Modal/ModalRightToLeft';
import ForgetPasswordForm from '@/components/reuseable/Inputs/Form/ForgetPasswordForm/ForgetPassword';

function User() {
  const [modalStatus, setModalStatus] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState('LogInForm');

  return (
    <div>
      <div
        className="user-container"
        onClick={() => setModalStatus(!modalStatus)}
      >
        <FaUser className="user-icon" />
      </div>

      {/* Sign-Up, Login Modal */}

      <ModalRightToLeft showModal={modalStatus}>
        {selectedFrom === 'LogInForm' && (
          <LogInForm
            setClose={setModalStatus}
            setSelectedFrom={setSelectedFrom}
          />
        )}

        {selectedFrom === 'SignUpForm' && (
          <SignUpForm
            setClose={setModalStatus}
            setSelectedFrom={setSelectedFrom}
          />
        )}

        {selectedFrom === 'ForgetPassword' && (
          <ForgetPasswordForm
            setClose={setModalStatus}
            setSelectedFrom={setSelectedFrom}
          />
        )}
      </ModalRightToLeft>
    </div>
  );
}

export default User;
