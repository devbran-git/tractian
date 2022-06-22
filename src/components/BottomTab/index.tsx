import './styles.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  BarChartOutlined,
  HomeOutlined,
  ToolOutlined,
} from '@ant-design/icons';

const BottomTab: React.FC = () => {
  return (
    <nav className='bottom-tab'>
      <NavLink
        style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          isActive ? 'active-style' : 'inactive-style'
        }
        to='/'>
        <HomeOutlined className='bottom-tab-icon' />
      </NavLink>

      <NavLink
        style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          isActive ? 'active-style' : 'inactive-style'
        }
        to={`/manutencao`}>
        <ToolOutlined className='bottom-tab-icon' />
      </NavLink>
      <NavLink
        style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          isActive ? 'active-style' : 'inactive-style'
        }
        to='/ativos'>
        <BarChartOutlined className='bottom-tab-icon' />
      </NavLink>
    </nav>
  );
};

export default BottomTab;
