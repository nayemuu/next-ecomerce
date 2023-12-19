'use client';
import { FaUser } from 'react-icons/fa';

import './User.css';
import Dropdown from './Dropdown/Dropdown';
import { useEffect, useRef, useState } from 'react';
import SignUpForm from '@/Components/Inputs/Form/SignUpForm/SignUpForm';
import ModalRightToLeft from '@/Components/Modal/ModalRightToLeft';
import LogInForm from '@/Components/Inputs/Form/LogInForm/LogInForm';

function User() {
  const [modalStatus, setModalStatus] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState('SignUpForm');

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
      </ModalRightToLeft>
    </div>
  );
}

export default User;
