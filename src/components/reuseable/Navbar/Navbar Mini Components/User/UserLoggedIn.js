'use client';
import { FaUser } from 'react-icons/fa';

import './User.css';
import Dropdown from './Dropdown/Dropdown';
import { useEffect, useRef, useState } from 'react';

function UserLoggedIn() {
  const [userDropdown, setUserDropdown] = useState(false);
  // const [signUp, setSignUp] = useState(false);
  // onClick={() => setSignUp(!signUp)}
  const [logIn, setLogIn] = useState(false);

  const userDropdownHandler = () => {
    // console.log('userDropdownHandler, userDropdown', userDropdown);
    setUserDropdown(!userDropdown);
  };

  const UserDropdownContainerRef = useRef(null);

  const handleOutsideClick = (event) => {
    // console.log('Inside handleOutsideClick function')
    // console.log('userDropdown = ', userDropdown);
    if (UserDropdownContainerRef.current?.contains(event.target)) {
      // console.log('UserDropdownContainerRef.current.contains(event.target) = ', UserDropdownContainerRef.current.contains(event.target));
    }
    // if (userDropdown) {
    //   if (UserDropdownContainerRef.current?.contains(event.target)) {
    //     console.log('UserDropdownContainerRef.current.contains(event.target) = ', UserDropdownContainerRef.current.contains(event.target));
    //     console.log('Clicked Inside');
    //   } else {
    //     console.log('Clicked Outside');
    //     setUserDropdown(false);
    //   }
    // }

    if (UserDropdownContainerRef.current?.contains(event.target)) {
      // console.log('UserDropdownContainerRef.current.contains(event.target) = ', UserDropdownContainerRef.current.contains(event.target));
      // console.log('Clicked Inside');
    } else {
      // console.log('Clicked Outside');
      setUserDropdown(false);
    }
  };

  useEffect(() => {
    // console.log('yoo')
    document.addEventListener('click', handleOutsideClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={UserDropdownContainerRef}>
      <div
        className="user-container"
        onClick={() => {
          userDropdownHandler();
        }}
      >
        <FaUser className="user-icon" />
      </div>
      {userDropdown && <Dropdown />}
    </div>
  );
}

export default UserLoggedIn;
