// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

import mangadvice from 'images/mangadvice.png';
import search from 'images/icons/search.svg';
import user from 'images/icons/user.svg';

const Navbar = () => {
  const [active, setActive] = useState(0);
  const changeActive = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number,
  ): void => {
    if (index !== 3) {
      setActive(index);
    }
  };

  const hanldeActive = (index: number): string =>
    active === index ? 'active' : '';

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container-md'>
        <a className='navbar-brand' href='#home'>
          <img
            src={mangadvice}
            alt='mangadvice logo'
            className='navbar-mangadvice-logo'
          />
        </a>
        {/* <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button> */}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a
                className={`nav-link ${hanldeActive(0)}`}
                aria-current='page'
                onClick={(e) => changeActive(e, 0)}
                href='#'
              >
                Advice
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${hanldeActive(1)}`}
                onClick={(e) => changeActive(e, 1)}
                href='#'
              >
                Liste
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${hanldeActive(2)}`}
                onClick={(e) => changeActive(e, 2)}
                href='#'
              >
                info
              </a>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search manga'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              <img src={search} alt='search logo' />
            </button>
          </form>
          <a
            className='nav-link user-logo'
            onClick={(e) => changeActive(e, 3)}
            href='#'
          >
            <img src={user} alt='user logo' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
