import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import logo from '../../assets/images/logo.svg';

import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  const { Text } = Typography;

  return (
    <div className='header'>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <img style={{ width: '64px' }} src={logo} alt='Tractian' />
      </Link>

      <Text>{headerTitle}</Text>
    </div>
  );
};

export default Header;
