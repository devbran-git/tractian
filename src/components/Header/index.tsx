import './styles.css';
import React from 'react';

import logo from '../../assets/images/logo.svg';

import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <div className='header'>
      <img style={{ width: '40px', height: '6px' }} src={logo} alt='Tractian' />

      <h1>{headerTitle}</h1>
    </div>
  );
};

export default Header;
