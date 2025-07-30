import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const links = (
    <>
       <NavLink
        to="/"
        className={({ isActive }) =>
          (isActive
            ? 'text-base text-yellow-300'
            : 'text-base text-white hover:text-yellow-300') + ' ml-4'
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          (isActive
            ? 'text-base text-yellow-300'
            : 'text-base text-white hover:text-yellow-300') + ' ml-4'
        }
      >
        Login
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) =>
          (isActive
            ? 'text-base text-yellow-300'
            : 'text-base text-white hover:text-yellow-300') + ' ml-4'
        }
      >
        Register
      </NavLink>
    </>
  );

  return (
    <header className="navbar px-3  shadow-sm bg-cyan-950 text-white rounded-full my-4">
      <div className="navbar-start">
        <Link
          to="/"
          className="btn bg-transparent text-2xl border-0 shadow-none text-white font-medium tracking-wide"
        >
          Nexora
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn rounded-full bg-yellow-300 texyt-white border-0 px-6 shadow-none">
          Login / Register
        </button>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" cursor-pointer px-3 lg:hidden ml-4 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="bg-cyan-950 menu menu-sm dropdown-content mt-6  ml-[-140px] bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
