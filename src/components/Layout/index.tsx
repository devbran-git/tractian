import './styles.css';
import React from 'react';

import Header from '../Header';
import LinedSwitch from '../LinedSwitch';
import BottomTab from '../BottomTab';

import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({
  units,
  headerTitle,
  selectedUnit,
  setSelectedUnit,
  children,
}) => {
  return (
    <main className='container'>
      <Header headerTitle={headerTitle} />

      <div className='lined-switch-sticky'>
        <LinedSwitch
          units={units}
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
        />
      </div>

      {children}
      <BottomTab />
    </main>
  );
};

export default Layout;
