import './styles.css';
import { Typography } from 'antd';
import React from 'react';

import { PrimaryButtonProps } from './types';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick }) => {
  const { Text } = Typography;

  return (
    <div className='button-container' onClick={onClick}>
      <Text className='button-text'>Solicitar manutenção</Text>
    </div>
  );
};

export default PrimaryButton;
