import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingSpin: React.FC = () => {
  return (
    <div
      style={{
        top: '60px',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100Vh',
      }}>
      <LoadingOutlined />
    </div>
  );
};

export default LoadingSpin;
