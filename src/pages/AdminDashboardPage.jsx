import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authContext';
import VideoComponent from '../components/VideoComponent';

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { dispatch } = React.useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //methods
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logOut = () => {
    dispatch({
      type: 'LOGOUT',
    });
    navigate('/admin/login');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-5 px-64 text-gray-700 sm:w-full bg-background">
      <div className="container flex justify-between w-full py-8 sm:w-full ">
        <h1 className="text-4xl font-extrabold text-white font-inter leading-20">
          APP
        </h1>
        <button
          className="flex items-center justify-center w-32 h-12 gap-2 p-3 rounded-full bg-lightGreen"
          onClick={() => logOut()}
        >
          <div className="w-6 h-6">
            <img src="/icons/logout.svg" />
          </div>
          <span className="text-sm leading-5 tracking-tight font-inter">
            Logout
          </span>
        </button>
      </div>

      <div className="container flex justify-between py-4">
        <p className="text-5xl font-thin text-white font-inter leading-48">
          Today’s leaderboard
        </p>
        <div className="text-white bg-[#1D1D1D] rounded-lg w-96 h-14">
          <div className="flex gap-2 p-2">
            <p className="p-2 text-sm font-thin leading-5 font-inter">
              30 May 2022
            </p>
            <p className="text-lemon">.</p>
            <div className="items-center justify-center p-2 text-sm font-thin text-black rounded-md bg-lightGreen ">
              SUSBMISSIONS OPEN
            </div>
            <p className="text-lemon">.</p>
            <p className="p-2 text-sm font-thin leading-5 font-inter">11:34</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full p-4 text-upText">
        <div className="flex gap-x-14">
          <p className="font-thin">#</p>
          <p className="font-thin">Title</p>
        </div>
        <p className="font-thin">Author</p>
        <div className="relative inline-block">
          <button
            type="button"
            className="inline-flex items-center justify-center w-full px-4 py-2 pr-0 text-sm rounded-md font-lighter bg-background text-upText"
            onClick={toggleDropdown}
          >
            <span className="font-thin">Most Liked</span>
            <img src="/icons/down.svg" alt="" />
          </button>
          {/* Dropdown menu */}
          {dropdownOpen && (
            <ul className="absolute right-0 z-10 w-full py-2 mt-2 rounded-md shadow-lg bg-background border border-[#848484] border-opacity-25">
              {/* Dropdown menu items */}
              <li>
                <button
                  href="#"
                  className="block w-full px-4 py-2 text-sm text-left text-upText hover:bg-background hover:text-lemon"
                >
                  Item 1
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      <VideoComponent />
    </div>
  );
};

export default AdminDashboardPage;
