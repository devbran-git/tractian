import './styles.css';
import React from 'react';
import { Space, Typography } from 'antd';

import { SpecificationCardProps } from './types';
import { colors } from '../../styles/colors';

const SpecificationCard: React.FC<SpecificationCardProps> = ({
  text,
  children,
}) => {
  const { Text } = Typography;

  return (
    <Space size={0} className='specification-card-container'>
      {children}
      <Text style={{ color: colors.white }} className='specification-card-text'>
        {text}
      </Text>
    </Space>
  );
};

export default SpecificationCard;
