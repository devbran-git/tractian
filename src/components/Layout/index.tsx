import './maintenance.css';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='container'>
      {children}
      <nav className='bottom-tab'>
        <Link to='/home'>Unidades</Link>
        <Link to='/manutencao'>Manutenção</Link>
        <Link to='/ativos'>Ativos</Link>
      </nav>
    </div>
  );
};

export default Layout;
