import './styles.css';
import React from 'react';

import logo from '../../assets/images/logo.svg';

import { HeaderProps } from './types';
import { Link } from 'react-router-dom';

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <div className='header'>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <img style={{ width: '64px' }} src={logo} alt='Tractian' />
      </Link>

      <h1>{headerTitle}</h1>
    </div>
  );
};

export default Header;
