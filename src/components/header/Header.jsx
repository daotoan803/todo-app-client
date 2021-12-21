import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky-top row bg-dark justify-content-center">
      <div className="col-5 my-2">
        <Link to="/" className=" text-white h2 text-decoration-none">
          TODO APP
        </Link>
      </div>
      <div className="col-5 d-flex justify-content-end align-items-center">
        <Link to="/login" className="text-white text-decoration-none h5 mx-3">
          LOGIN
        </Link>
        <Link to="/signup" className="text-white text-decoration-none h6 ">
          SIGNUP
        </Link>
      </div>
    </header>
  );
};

export default Header;
