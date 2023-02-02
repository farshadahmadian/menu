import { useState } from 'react';

import Dropdown from '../dropdown/dropdown.component';

import './navbar.styles.css';

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleDropDown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <div>
      <ul className='nav-list'>
        <li onClick={toggleDropDown}>Categories</li>
        <li>Secondary</li>
      </ul>
      {isDropdown && <Dropdown />}
    </div>
  );
};

export default Navbar;
