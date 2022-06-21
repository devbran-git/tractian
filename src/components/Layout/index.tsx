import React from 'react';

import BottomTab from '../BottomTab';
import Header from '../Header';

import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ headerTitle, children }) => {
  return (
    <main className='container'>
      <Header headerTitle={headerTitle} />
      {children}
      <BottomTab />
    </main>
  );
};

export default Layout;
