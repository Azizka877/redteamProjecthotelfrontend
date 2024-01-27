import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { Link } from 'react-router-dom';


function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState('dashboard'); 

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className='d-flex flex-wrap flex-column justify-content-between text-white vh-100' style={{ backgroundColor: '#4b4f52' }}>
      <div>
        <div className='ms-3'>
          <i className="bi bi-bookmark-fill me-2"></i>
          <span className=''>RED PRODUCT</span> <br /> <br />
          <span>Principal</span> 
        </div>
        <br />
        <div>
          <ul className="nav nav-pills d-flex flex-column  ">
            <li className={`nav-item ${selectedMenu === 'dashboard' ? 'selected' : ''}   `}  >
              <Link to={'/dashome'} className={`nav-link text-decoration-none text-white ${selectedMenu === 'dashboard' ? 'selected-menu' : ''}`}   onClick={() => handleMenuClick('dashboard')}>
                <i className="bi bi-grid-fill me-2 fs-5"></i>
                <span className='fs-6 ms-4'>Dashboard</span>
              </Link>
            </li>
            <li className={`nav-item  ${selectedMenu === 'hotels' ? 'selected' : ''} `}>
              <Link to={'/home'} className={`nav-link text-decoration-none text-white ${selectedMenu === 'hotels' ? 'selected-menu' : ''}`}  onClick={() => handleMenuClick('hotels')}>
                <i className="bi bi-display-fill me-2 fs-5"></i>
                <span className='fs-6'>Liste des hotels</span>
              </Link>
            </li>
          </ul>
        </div> 
      </div>

      <div>
        <div className='d-flex'>
          <div>
            {/* <img src={}  alt="" /> */}
          </div>
        </div>
        <div className='d-flex flex-column'>
          <span>Dabakh</span>
          <span>Status</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
