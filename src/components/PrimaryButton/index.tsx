import './styles.css';
import React from 'react';
import { Typography } from 'antd';

import { colors } from '../../styles/colors';

import { PrimaryButtonProps } from './types';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick }) => {
  const { Text } = Typography;

  return (
    <div className='button-container' onClick={onClick}>
      <Text style={{ color: colors.white }} className='button-text'>
        Solicitar manutenção
      </Text>
    </div>
  );
};

export default PrimaryButton;
