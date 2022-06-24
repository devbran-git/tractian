import './styles.css';
import React from 'react';
import { Typography } from 'antd';

import { PrimaryButtonProps } from './types';

import { colors } from '../../styles/colors';

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
