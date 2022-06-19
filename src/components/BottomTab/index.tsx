import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomTab: React.FC = () => {
  return (
    <nav className='bottom-tab'>
      <NavLink
        style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          isActive ? 'active-style' : 'inactive-style'
        }
        to='/'>
        Unidades
      </NavLink>
      <NavLink
        style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          isActive ? 'active-style' : 'inactive-style'
        }
        to='/manutencao'>
        Manutenção
      </NavLink>
      <NavLink
        style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          isActive ? 'active-style' : 'inactive-style'
        }
        to='/ativos'>
        Ativos
      </NavLink>
    </nav>
  );
};

export default BottomTab;
